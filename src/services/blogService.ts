import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';
import { BlogPost, BlogFormData } from '../types/blog';

const COLLECTION_NAME = 'blogs';

// Generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Upload image to Firebase Storage
const uploadImage = async (file: File, slug: string): Promise<string> => {
  const imageRef = ref(storage, `blog-images/${slug}-${Date.now()}`);
  const snapshot = await uploadBytes(imageRef, file);
  return await getDownloadURL(snapshot.ref);
};

// Get all published blog posts
export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
  try {
    console.log('Querying published blogs from Firestore...');
    
    // First try with orderBy
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', 'published'),
      orderBy('publishDate', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Found blog:', { id: doc.id, title: data.title, status: data.status });
      return {
        id: doc.id,
        ...data
      } as BlogPost;
    });
    
    console.log(`Found ${blogs.length} published blogs`);
    return blogs;
  } catch (error) {
    console.warn('Failed to query with orderBy, trying without:', error);
    
    // Fallback: query without orderBy and sort in memory
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', 'published')
    );
    
    const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Found blog (fallback):', { id: doc.id, title: data.title, status: data.status });
      return {
        id: doc.id,
        ...data
      } as BlogPost;
    });
    
    console.log(`Found ${blogs.length} published blogs (fallback)`);
    
    // Sort in memory
    return blogs.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }
};

// Get all blog posts (for admin)
export const getAllBlogs = async (): Promise<BlogPost[]> => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('publishDate', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as BlogPost));
};

// Get single blog post by slug
export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug));
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) {
    return null;
  }
  
  const doc = querySnapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data()
  } as BlogPost;
};

// Get blog post by ID
export const getBlogById = async (id: string): Promise<BlogPost | null> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    } as BlogPost;
  }
  
  return null;
};

// Create new blog post
export const createBlog = async (formData: BlogFormData): Promise<string> => {
  const slug = generateSlug(formData.title);
  
  let imageUrl = '';
  if (formData.image) {
    imageUrl = await uploadImage(formData.image, slug);
  }

  const blogData = {
    slug,
    title: formData.title,
    author: formData.author,
    publishDate: formData.publishDate,
    status: formData.status,
    imageUrl,
    content: formData.content,
    excerpt: formData.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
  };

  const docRef = await addDoc(collection(db, COLLECTION_NAME), blogData);
  return docRef.id;
};

// Update blog post
export const updateBlog = async (id: string, formData: BlogFormData): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const slug = generateSlug(formData.title);
  
  let updateData: any = {
    slug,
    title: formData.title,
    author: formData.author,
    publishDate: formData.publishDate,
    status: formData.status,
    content: formData.content,
    excerpt: formData.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
  };

  if (formData.image) {
    updateData.imageUrl = await uploadImage(formData.image, slug);
  }

  await updateDoc(docRef, updateData);
};

// Delete blog post
export const deleteBlog = async (id: string): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};