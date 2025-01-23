import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand" to="/">
                Frontend Flashcards
            </Link>
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
        </nav>
    );
}

export default Navbar;