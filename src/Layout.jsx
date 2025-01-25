import React from 'react';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';

const Layout = ({ children }) => {
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