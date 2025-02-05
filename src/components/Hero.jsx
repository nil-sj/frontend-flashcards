import React from 'react';
import { Link } from 'react-router-dom';
import illustrationImage from '../assets/Homepage-Hero-Illustration.png'; 

const Hero = () => {
  return (
    <section className="bg-white" style={{ border: "1px solid white"}}>
    <div className="container hero-py">
      <div className="row align-items-center">
        {/* Left Column: Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="hero-heading">Welcome to <span className="d-inline d-sm-block">Frontend Flashcards</span></h1>
          <p className="lead">
            Discover an interactive way to master frontend development. Learn HTML, CSS, JavaScript, and beyond with flashcards designed to simplify complex concepts. Perfect for learners of all levels!
          </p>
          <div className="d-flex gap-3 mt-4">
            <Link to="/flashcards" className="btn btn-primary btn-lg">
              View Flashcards
            </Link>
            <Link to="/contribute" className="btn btn-outline-primary btn-lg">
              Contribute For Us
            </Link>
          </div>
        </div>

        {/* Right Column: Illustration Image */}
        <div className="col-md-6 text-center">
          <img
            src={illustrationImage}
            alt="Frontend Learning Illustration"
            className="img-fluid"
            style={{ maxHeight: '350px' }}
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
