import React from 'react';
import { Link } from 'react-router-dom';
import contributeImage from '../assets/Contribution-Illustration.png'; // Replace with actual image path

const ContributePromo = () => {
  return (
    <section className="sec-py bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Illustration Column */}
          <div className="col-md-6 text-center">
            <img
              src={contributeImage}
              alt="Contribute Illustration"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>
          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="section-heading">Join Us in Making a Difference</h2>
            <p className="lead text-muted">
              Help us expand our flashcard library and make frontend learning accessible to everyone. Contribute your expertise, ideas, or feedback!
            </p>
            <Link to="/contribute" className="btn btn-primary mt-4 featured-btn-text">
              Contribute Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributePromo;