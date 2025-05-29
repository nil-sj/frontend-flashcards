import React from 'react';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';
import usePageTracking from './usePageTracking';

const Layout = ({ children }) => {
  // for Google Analytics page tracking
  // This hook will track page views for Google Analytics
  // It should be called in the top-level component of your app
  // typically in Layout or App component
  usePageTracking();

  return (
    <>
      {/* Header */}
      <header className="bg-light sticky-top">
        <Navbar/>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <SiteFooter/>
      </footer>
    </>
  );
};

export default Layout;