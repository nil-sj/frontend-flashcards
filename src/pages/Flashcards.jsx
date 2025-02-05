import React from 'react';
import TopicCard from '../components/TopicCard';
import topicsConfig from '../../public/data/topics-config.json';

const Flashcards = () => {

  return (
    <>
    <section className="sec-py bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h1 className="page-heading">Explore Flashcards by Topics</h1>
          <p className="lead text-muted">Learn, revise, and master frontend development topics with curated flashcards designed for all levels of learners.</p>
        </div>

        {/* Topic Tiles Grid */}
        <div className="row">
          {topicsConfig.map((topic, index) => (
            <TopicCard topic={topic} key={index} />
          ))}
        </div>
      </div>
    </section>
    <section className="sec-py">
      <div className="container">
        <div className="text-center">
            <h2 className="section-heading">We’re Constantly growing!</h2>
            <p className="lead text-muted mb-3">
              Frontend development is ever-evolving, and so is our collection of topics. While we currently offer flashcards on popular topics listed above, we're always working to add fresh, relevant content to keep you ahead in your learning journey. Have a topic in mind? Let us know, and it might be featured in our next update!
            </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Flashcards;