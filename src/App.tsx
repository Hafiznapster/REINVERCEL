import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { initializePerformanceMonitoring, lazyLoadResources, preloadCriticalResources } from './utils/performance';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import QuotePageSimple from './pages/QuotePageSimple';
import ServiceDetail from './pages/Services/ServiceDetail';
import SolarBatteryEVPage from './pages/Services/SolarBatteryEVPage';
import DesignConsultancyPage from './pages/Services/DesignConsultancyPage';
import EnergyAuditPage from './pages/Services/EnergyAuditPage';
import MaintenanceServicingPage from './pages/Services/MaintenanceServicingPage';
import WindEnergyPage from './pages/Services/WindEnergyPage';
import CTA from './components/CTA';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import BlogForm from './pages/BlogForm';
import QuoteManagement from './pages/QuoteManagement';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    initializePerformanceMonitoring();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Lazy load non-critical resources after initial render
    setTimeout(() => {
      lazyLoadResources();
    }, 1000);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <SpeedInsights />
          <Routes>
          <Route path="/" element={
            <PageTransition>
              <HomePage />
              <CTA />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } />
          <Route path="/services/solar-battery-ev" element={
            <PageTransition>
              <SolarBatteryEVPage />
            </PageTransition>
          } />
          <Route path="/services/design-consultancy" element={
            <PageTransition>
              <DesignConsultancyPage />
            </PageTransition>
          } />
          <Route path="/services/energy-audit" element={
            <PageTransition>
              <EnergyAuditPage />
            </PageTransition>
          } />
          <Route path="/services/maintenance-servicing" element={
            <PageTransition>
              <MaintenanceServicingPage />
            </PageTransition>
          } />
          <Route path="/services/wind-energy" element={
            <PageTransition>
              <WindEnergyPage />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          } />
          <Route path="/projects/:serviceId" element={
            <PageTransition>
              <ServiceDetail />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />
          <Route path="/quote" element={
            <PageTransition>
              <QuotePageSimple />
            </PageTransition>
          } />
          <Route path="/blogs" element={
            <PageTransition>
              <BlogsPage />
            </PageTransition>
          } />
          <Route path="/blogs/:slug" element={
            <PageTransition>
              <BlogPostPage />
            </PageTransition>
          } />
          <Route path="/adminblog" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/blog/new" element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/blog/edit/:id" element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/quotes" element={
            <ProtectedRoute>
              <QuoteManagement />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
