import React from 'react';
import missionImage from '../assets/Mission-Illustration.png'; // Replace with actual image path

const AboutSection = () => (
    <section className="sec-py bg-white">
        <div className="container">
          <div className="text-center mb-5">
                <h1 className="page-heading">About Frontend Flashcards</h1>
                <p className="lead text-muted px-lg-5">
                    Frontend Flashcards is a free, community-driven resource to help developers
                    master frontend concepts through bite-sized flashcards. We believe in open
                    knowledge sharing—anyone can learn, and anyone can contribute!
                </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
                <h2 className="section-heading">Mission</h2>
                <p className="lead text-muted">To make frontend knowledge structured, easily accessible, and engaging for learners of all levels by providing an interactive and ever-growing resource and helping developers gain expertise.</p>
                <h2 className="section-heading mt-4">Vision</h2>
                <p className="lead text-muted">To build a thriving global community where frontend learners and contributors collaborate to share knowledge, refine skills, and foster continuous growth through an open and inclusive platform.</p>            
            </div>
            <div className="col-md-6 text-center">
                <img
                src={missionImage}
                alt="Mission & Vision"
                className="img-fluid"
                style={{ maxHeight: '350px' }}
                />
            </div>  
        </div>
        </div>
      </section>
  );
  export default AboutSection;