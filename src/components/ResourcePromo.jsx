import React from 'react';
import { Link } from 'react-router-dom';
import illustrationImage from '../assets/Resources-Illustration.png'; // Replace with actual image path

const ResourcesPromo = () => {
  return (
    <section className="sec-py bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="section-heading">Explore Other Resources</h2>
            <p className="lead text-muted">
              Looking for more learning materials? Dive into our curated resources, including tutorials, guides, and articles to complement your flashcard learning.
            </p>
            <Link to="/resources" className="btn btn-primary mt-4 featured-btn-text">
              Explore Resources
            </Link>
          </div>
          {/* Illustration Column */}
          <div className="col-md-6 text-center">
            <img
              src={illustrationImage}
              alt="Resources Illustration"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPromo;