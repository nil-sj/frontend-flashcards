import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Logo-Ver2.png'; // Replace with the path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div className="container">
        {/* Navbar Brand with Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logoImage}
            alt="Frontend Flashcards"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flashcardlist">
                FlashCards
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Other Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;