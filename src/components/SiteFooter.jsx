import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Logo-Ver2.png'; // Replace with your logo path

const SiteFooter = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo and Tagline */}
          <div className="col-md-3 mb-4">
            <img
              src={logoImage}
              alt="Frontend Flashcards Logo"
              style={{ height: '50px', marginBottom: '10px' }}
            />
            <p>Your Path to Frontend Mastery</p>
            <p>Email: support@frontendflashcards.com</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/flashcards" className="text-white text-decoration-none">
                  FlashCards
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white text-decoration-none">
                  Other Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/tutorials" className="text-white text-decoration-none">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-white text-decoration-none">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="col-md-3 mb-4">
            <h5>Get Involved</h5>
            <Link to="/support" className="btn btn-primary btn-sm w-100 mb-2">
              Support Us
            </Link>
            <Link to="/contribute" className="btn btn-outline-primary btn-sm w-100">
              Contribute For Us
            </Link>
          </div>
        </div>
        {/* Bottom Strip */}
        <div className="mt-4 pt-3 border-top border-light text-center">
          <p className="mb-0">
            <Link to="/privacy-policy" className="text-white text-decoration-none me-3">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-white text-decoration-none me-3">
              Terms of Use
            </Link>
            <Link to="/disclaimer" className="text-white text-decoration-none me-3">
              Disclaimer
            </Link>
          </p>
          <p className="mb-0 mt-2">
            © 2025 Frontend Flashcards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;