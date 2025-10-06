import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedBlogs } from '../services/blogService';
import { BlogPost } from '../types/blog';

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log('Fetching published blogs...');
        const publishedBlogs = await getPublishedBlogs();
        console.log('Fetched blogs:', publishedBlogs);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-3">Our Blog</h1>
                <p className="lead mb-0">
                  Stay updated with the latest insights, trends, and innovations in renewable energy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {error && (
          <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            <div>{error}</div>
          </div>
        )}

        {blogs.length === 0 && !error ? (
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="fas fa-blog text-muted" style={{ fontSize: '4rem' }}></i>
            </div>
            <h3 className="text-muted mb-3">No blog posts available yet</h3>
            <p className="text-muted">Check back soon for the latest updates and insights!</p>
          </div>
        ) : (
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  {blog.imageUrl && (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{blog.title}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">
                      {blog.excerpt || (blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...')}
                    </p>
                    <div className="d-flex justify-content-between align-items-center text-sm text-muted mb-3">
                      <span>
                        <i className="fas fa-user me-1"></i>
                        {blog.author}
                      </span>
                      <span>
                        <i className="fas fa-calendar me-1"></i>
                        {new Date(blog.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="btn btn-success"
                    >
                      <i className="fas fa-arrow-right me-2"></i>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;