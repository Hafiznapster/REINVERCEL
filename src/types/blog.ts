export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft';
  imageUrl: string;
  content: string;
  excerpt?: string;
}

export interface BlogFormData {
  title: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft';
  content: string;
  image?: File;
}