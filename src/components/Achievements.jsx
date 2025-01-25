import React from 'react';
import backgroundImage from '../assets/Global-Map-Dark-Blue.jpg';

const Achievements = () => {
  // Data for the achievement stats
  const achievements = [
    {
      title: '10+ Topics',
      description: 'Topics covered across various frontend development domains.',
      icon: 'bi-book', // Bootstrap Icons (or replace with your preferred icons)
    },
    {
      title: '500+ Flashcards',
      description: 'Comprehensive flashcards to enhance your learning journey.',
      icon: 'bi-card-text',
    },
    {
      title: '10,000+ Visitors',
      description: 'Learners worldwide have benefited from our flashcards.',
      icon: 'bi-people',
    },
  ];

  return (
    <section
      className="text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace with your parallax background image
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="sec-py" style={{ backgroundColor: 'rgba(0, 0, 255, 0.6)'}}>  
      <div className="container text-center" >
        {/* Section Heading */}
        <h2 className="section-heading">Achievements So Far</h2>
        <p className="lead mb-5">
          Together, we’re building a community of lifelong learners. Here's what we’ve accomplished so far:
        </p>

        {/* Achievement Cards */}
        <div className="row">
          {achievements.map((achievement, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: 'rgba(60, 0, 0, 0.3)' }}>
                <i className={`bi ${achievement.icon} mb-3`} style={{ fontSize: '3rem', color: '#f8c52c' }}></i>
                <h3 className="card-title mb-3">{achievement.title}</h3>
                <p className="text-muted-white">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Achievements;