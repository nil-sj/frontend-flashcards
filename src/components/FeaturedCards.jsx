import React from 'react';
import { Link } from 'react-router-dom';
import htmlImage from '../assets/Featured-Img-HTML.png';
import cssImage from '../assets/Featured-Img-CSS.png';
import jsImage from '../assets/Featured-Img-JS.png';

const images = [htmlImage, cssImage, jsImage];

const FeaturedCards = () => {

const cards = [
    {
        title: 'HTML',
        description: 'Master HTML, the essential language for structuring and organizing content on the web.',
        buttonText: 'Explore HTML Flashcards',
        link: '/flashcard?topic=html',
    },
    {
        title: 'CSS',
        description: 'Learn to style web pages with layouts, colors, typography, and animations effortlessly.',
        buttonText: 'Explore CSS Flashcards',
        link: '/flashcard?topic=css',
    },
    {
        title: 'JavaScript',
        description: 'Bring your web pages to life with interactivity, dynamic features, and creative functionality.',
        buttonText: 'Explore JavaScript Flashcards',
        link: '/flashcard?topic=javascript',
    },
];



  return (
    <section className="sec-py bg-light">
      <div className="container">
        {/* Section Heading and Description */}
        <div className="text-center mb-5">
          <h2 className="section-heading">Start Your Learning Journey</h2>
          <p className="lead text-muted">
            Explore our curated flashcards for foundational topics and gain a deeper understanding of HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Cards Row */}
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 featured-card border-0" onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
            }>
                {/* Image Section */}
                <div className="card-img-top overflow-hidden" style={{ backgroundColor: "#ffffff"}}>
                  <img
                    src={images[index]}
                    alt={`${card.title} illustration`}
                    className="img"
                    style={{ objectFit: 'contain', width: '100%' }}
                  />
                </div>

                {/* Text Section */}
                <div className="card-body px-5 pt-1 text-center">
                  <h3 className="card-title fw-bold">{card.title}</h3>
                  <p className="card-text text-muted">{card.description}</p>
                </div>

                {/* Button Section */}
                <div className="card-footer bg-white border-0 px-5 pb-5">
                  <Link to={card.link} className="btn btn-primary w-100 featured-btn-text">
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
