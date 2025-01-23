import React from 'react';
import { Link } from 'react-router-dom';
import topicsConfig from '../../public/data/topics-config.json'

const topics = [
  { name: 'HTML', slug: 'html' },
  { name: 'CSS', slug: 'css' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Accessibility', slug: 'accessibility' },
];

const Flashcards = () => {
  return (
    <div className="row">
      <h1>Topics</h1>
      {topicsConfig.map((topic) => (
        <div className="col-md-3 mb-4" key={topic.slug}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{topic.topic}</h5>
              <p>{topic.description}</p>
              <Link to={`/flashcards?topic=${topic.slug}`} className="btn btn-primary">
                View Flashcards
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;