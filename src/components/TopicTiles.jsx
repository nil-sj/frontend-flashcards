import React from 'react';
import TopicCard from './TopicCard';
import topicsConfig from '../../public/data/topics-config.json';

const TopicTiles = () => {

  return (
    <section className="sec-py bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="section-heading">View More Flashcards</h2>
          <p className="lead text-muted">
            Expand your knowledge with flashcards on advanced topics and tools.
          </p>
        </div>

        {/* Topic Tiles Grid */}
        <div className="row">
          {topicsConfig.slice(3).filter(t => t.ready).slice(0,6).map((topic, index) => (
            <TopicCard topic={topic} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicTiles;