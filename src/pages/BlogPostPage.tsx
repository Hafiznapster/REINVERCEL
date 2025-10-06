import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../services/blogService';
import { BlogPost } from '../types/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        const blogPost = await getBlogBySlug(slug);
        if (blogPost) {
          setBlog(blogPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading blog post...</div>
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Blogs
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8 pb-8 border-b">
              <span className="mr-6">By {blog.author}</span>
              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;