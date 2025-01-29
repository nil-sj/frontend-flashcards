import React from 'react'
import { Link } from 'react-router-dom';

function ResourceCard({ resource }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
        <a
            href={resource.url}
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
        >
        <div 
            className="card resource-card h-100 border-0"
            onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
            }
        >
            <h3 className="card-title mb-3">{resource.title}</h3>
            <h6 className="text-muted">{resource.type} - {resource.source}</h6>
            <p className="card-text text-muted">{resource.description}</p>
        </div>
        </a>
    </div>
  );
}

export default ResourceCard;