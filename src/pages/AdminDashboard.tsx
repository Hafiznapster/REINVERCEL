import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getAllBlogs, deleteBlog } from '../services/blogService';
import { BlogPost } from '../types/blog';

const AdminDashboard: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const allBlogs = await getAllBlogs();
      setBlogs(allBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(id);
        setBlogs(blogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Error deleting blog post');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const publishedCount = blogs.filter(blog => blog.status === 'published').length;
  const draftCount = blogs.filter(blog => blog.status === 'draft').length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-2">Blog Dashboard</h1>
                <p className="lead mb-0">Manage your blog posts and content with ease</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-2 justify-content-lg-end justify-content-start mt-3 mt-lg-0">
                <Link to="/admin/blog/new" className="btn btn-light btn-lg">
                  <i className="fas fa-plus me-2"></i>New Post
                </Link>
                <Link to="/admin/quotes" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-calculator me-2"></i>Quotes
                </Link>
                <button onClick={handleLogout} className="btn btn-outline-light btn-lg">
                  <i className="fas fa-sign-out-alt me-2"></i>Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                      <i className="fas fa-file-alt text-primary fs-4"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Total Posts</h6>
                    <h3 className="mb-0 fw-bold">{blogs.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3">
                      <i className="fas fa-check-circle text-success fs-4"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Published</h6>
                    <h3 className="mb-0 fw-bold text-success">{publishedCount}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-warning bg-opacity-10 rounded-3 p-3">
                      <i className="fas fa-clock text-warning fs-4"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Drafts</h6>
                    <h3 className="mb-0 fw-bold text-warning">{draftCount}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom">
            <h5 className="mb-0 fw-bold">All Blog Posts</h5>
          </div>
          <div className="card-body p-0">
            {blogs.length === 0 ? (
              <div className="text-center py-5">
                <div className="mb-4">
                  <i className="fas fa-file-alt text-muted" style={{ fontSize: '4rem' }}></i>
                </div>
                <h4 className="text-muted mb-3">No blog posts yet</h4>
                <p className="text-muted mb-4">Get started by creating your first blog post</p>
                <Link to="/admin/blog/new" className="btn btn-success btn-lg">
                  <i className="fas fa-plus me-2"></i>Create Your First Post
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="border-0">Post</th>
                      <th scope="col" className="border-0">Author</th>
                      <th scope="col" className="border-0">Date</th>
                      <th scope="col" className="border-0">Status</th>
                      <th scope="col" className="border-0 text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr key={blog.id}>
                        <td className="py-3">
                          <div className="d-flex align-items-center">
                            {blog.imageUrl ? (
                              <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="rounded me-3"
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                              />
                            ) : (
                              <div 
                                className="bg-light rounded me-3 d-flex align-items-center justify-content-center"
                                style={{ width: '60px', height: '60px' }}
                              >
                                <i className="fas fa-image text-muted"></i>
                              </div>
                            )}
                            <div>
                              <h6 className="mb-1 fw-semibold">{blog.title}</h6>
                              <small className="text-muted">
                                {blog.content.replace(/<[^>]*>/g, '').substring(0, 80)}...
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-user-circle text-muted me-2"></i>
                            {blog.author}
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-calendar text-muted me-2"></i>
                            {new Date(blog.publishDate).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="py-3">
                          <span className={`badge ${
                            blog.status === 'published' 
                              ? 'bg-success' 
                              : 'bg-warning text-dark'
                          }`}>
                            <i className={`fas ${
                              blog.status === 'published' 
                                ? 'fa-check-circle' 
                                : 'fa-clock'
                            } me-1`}></i>
                            {blog.status}
                          </span>
                        </td>
                        <td className="py-3 text-end">
                          <div className="btn-group" role="group">
                            <Link
                              to={`/admin/blog/edit/${blog.id}`}
                              className="btn btn-outline-primary btn-sm"
                            >
                              <i className="fas fa-edit me-1"></i>Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(blog.id!)}
                              className="btn btn-outline-danger btn-sm"
                            >
                              <i className="fas fa-trash me-1"></i>Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;