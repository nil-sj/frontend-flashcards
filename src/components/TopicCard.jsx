import React from 'react'
import { Link } from 'react-router-dom';
import sampleIcon from '../assets/Sample-Icon.png';

function TopicCard({ topic }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
        <Link to={topic.link}>
        <div 
            className="card tiles-card h-100 border-0"
            style={{
                backgroundImage: `url(${sampleIcon})`,
            }}
            onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
            }
        >
            <h3 className="card-title mb-3">{topic.title}</h3>
            <p className="card-text text-muted">{topic.description}</p>
        </div>
        </Link>
    </div>
  );
}

export default TopicCard;