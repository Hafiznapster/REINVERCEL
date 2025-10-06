import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog, updateBlog, getBlogById } from '../services/blogService';
import { BlogFormData } from '../types/blog';

const BlogForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    author: '',
    publishDate: new Date().toISOString().split('T')[0],
    status: 'draft',
    content: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLoading, setInitialLoading] = useState(isEditing);

  useEffect(() => {
    if (isEditing && id) {
      fetchBlog();
    }
  }, [isEditing, id]);

  const fetchBlog = async () => {
    try {
      const blog = await getBlogById(id!);
      if (blog) {
        setFormData({
          title: blog.title,
          author: blog.author,
          publishDate: blog.publishDate,
          status: blog.status,
          content: blog.content
        });
        if (blog.imageUrl) {
          setImagePreview(blog.imageUrl);
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Error loading blog post');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submitData = {
        ...formData,
        image: imageFile || undefined
      };

      if (isEditing && id) {
        await updateBlog(id, submitData);
      } else {
        await createBlog(submitData);
      }

      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error saving blog:', error);
      setError('Error saving blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  if (initialLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="text-white">
                <Link to="/admin/dashboard" className="text-white text-decoration-none mb-3 d-inline-block">
                  <i className="fas fa-arrow-left me-2"></i>Back to Dashboard
                </Link>
                <h1 className="display-4 fw-bold mb-2">
                  {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h1>
                <p className="lead mb-0">
                  {isEditing ? 'Update your existing blog post' : 'Write and publish a new blog post'}
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="text-white-50">
                <i className="fas fa-edit fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
              <i className="fas fa-exclamation-triangle me-2"></i>
              <div>{error}</div>
            </div>
          )}

          <div className="row g-4">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white border-bottom">
                  <h5 className="mb-0 fw-bold">
                    <i className="fas fa-file-alt text-primary me-2"></i>Post Content
                  </h5>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="title" className="form-label fw-semibold">
                      <i className="fas fa-heading text-muted me-2"></i>Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control form-control-lg"
                      placeholder="Enter your blog post title..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label fw-semibold">
                      <i className="fas fa-align-left text-muted me-2"></i>Content *
                    </label>
                    <div className="border rounded">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={(content) => setFormData({ ...formData, content })}
                        modules={modules}
                        style={{ minHeight: '400px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Publish Settings */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white border-bottom">
                  <h6 className="mb-0 fw-bold">
                    <i className="fas fa-cog text-success me-2"></i>Publish Settings
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label fw-semibold">Status</label>
                    <select
                      id="status"
                      className="form-select"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })}
                    >
                      <option value="draft">
                        <i className="fas fa-clock"></i> Draft
                      </option>
                      <option value="published">
                        <i className="fas fa-check-circle"></i> Published
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="publishDate" className="form-label fw-semibold">Publish Date</label>
                    <input
                      type="date"
                      id="publishDate"
                      className="form-control"
                      value={formData.publishDate}
                      onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="author" className="form-label fw-semibold">Author *</label>
                    <input
                      type="text"
                      id="author"
                      className="form-control"
                      placeholder="Author name"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white border-bottom">
                  <h6 className="mb-0 fw-bold">
                    <i className="fas fa-image text-warning me-2"></i>Featured Image
                  </h6>
                </div>
                <div className="card-body">
                  {imagePreview && (
                    <div className="position-relative mb-3">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="img-fluid rounded border"
                        style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview('');
                          setImageFile(null);
                        }}
                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="image" className="form-label fw-semibold">Upload Image</label>
                    <input
                      type="file"
                      id="image"
                      className="form-control"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <div className="form-text">
                      <i className="fas fa-info-circle me-1"></i>
                      Recommended: 1200x630px, max 5MB
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-success btn-lg"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          {isEditing ? 'Updating...' : 'Creating...'}
                        </>
                      ) : (
                        <>
                          <i className="fas fa-save me-2"></i>
                          {isEditing ? 'Update Post' : 'Create Post'}
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => navigate('/admin/dashboard')}
                      className="btn btn-outline-secondary"
                    >
                      <i className="fas fa-times me-2"></i>Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;