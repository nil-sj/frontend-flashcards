import React, { useState, useEffect } from 'react';
import ResourceCard from '../components/ResourceCard';

const Resources = () => {

  const [resources, setResources] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    fetch('/data/resources.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load resources data');
        }
        return response.json();
      })
      .then((data) => setResources(data))
      .catch((error) => console.error('Error fetching resources:', error));
  }, []);

  // Extract unique categories dynamically
  const uniqueCategories = ['All', ...new Set(resources.flatMap(resource => resource.type))];

  // Filter resources based on selected type
  const filteredResources = selectedType === 'All'
  ? resources
  : resources.filter((resource) => resource.type === selectedType);

  return (
    <>
    <section className="sec-py bg-white">
    <div className="container">
      <div className="text-center mb-5">
      <h1 className="page-heading">Curated Frontend Development Resources</h1>
      <p className="lead text-muted">
        Explore the best documentation, tutorials, blogs, and courses to enhance your frontend skills.
      </p>
      </div>
      {/* Category Filter Buttons */}
      <div className="text-center mb-5">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            className={`btn me-2 ${selectedType === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedType(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="row">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <ResourceCard resource={resource} key={index}/>
          ))
        ) : (
          <p className="text-center text-muted">No resources found for this category.</p>
        )}
      </div>

      
    </div>
    </section>
    {/* Disclaimer Section */}
    <section className="sec-py">
      <div className="container text-center">
        <h2 className="section-heading">Disclaimer</h2>
        <p className="lead text-muted">
          These external resources are curated for educational purposes. We do not own or control the content of these links. 
          <br/>If you are the owner of a resource and would like it removed, please contact us.
        </p>
        </div>
      </section>
    </>
  );
};

export default Resources;