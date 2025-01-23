import React from 'react';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <header className="container bg-light sticky-top">
        <Navbar/>
      </header>

      {/* Main Content */}
      <main className="container my-4">{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <SiteFooter/>
      </footer>
    </>
  );
};

export default Layout;