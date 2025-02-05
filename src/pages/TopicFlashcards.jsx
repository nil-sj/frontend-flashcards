import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import FlipCard from '../components/FlipCard';
import topicsConfig from '../../public/data/topics-config.json';
import underConstructionImage from '../assets/under-construction.png'; 

const TopicFlashcards = () => {
  const [searchParams] = useSearchParams();
  const topicSlug = searchParams.get('topic');
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [resetFlip, setResetFlip] = useState(0); // Added a state to reset the flip state

  const topicName = topicsConfig.find((topic) => topic.slug === topicSlug).topic;

  useEffect(() => {
    const topic = topicsConfig.find((t) => t.slug === topicSlug);
  
    if (topic) {
      fetch(`/data/${topic.file}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${topic.file}: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          setFlashcards(data);
        })
        .catch((err) => {
          console.error('Failed to load flashcards:', err);
        });
    }
  }, [topicSlug]);

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : flashcards.length - 1;
      setResetFlip(newIndex); // Trigger reset for FlipCard
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentCardIndex((prev) => {
      const newIndex = (prev + 1) % flashcards.length;
      setResetFlip(newIndex); // Trigger reset for FlipCard
      return newIndex;
    });
  };

  if (!flashcards.length) {
    return (
      <section className="sec-py bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="page-heading">{topicName} Flashcards</h1>
            <img
              src={underConstructionImage}
              alt="Topic Under Construction"
              className="img-fluid"
            />
            <p className="lead text-muted">Sorry! No flashcards available for this topic. Please select another topic.</p>
            <Link to="/flashcards" className="btn btn-primary mt-5 mb-5">
              Back to Topics
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sec-py bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="page-heading">{topicName} Flashcards</h1>
            <p className="lead text-muted mb-3">Click and flip the cards to explore the answer or navigate to another card.</p>
            <div className="text-center">
              <button className="btn btn-secondary me-2" onClick={handlePrevious}>
                Previous
              </button>
              <Link to="/flashcards" className="btn btn-primary me-2">
                Back to Topics
              </Link>
              <button className="btn btn-secondary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
            <FlipCard
              id={flashcards[currentCardIndex].id} // Ensure the ID is passed
              topic={flashcards[currentCardIndex].topic} // Pass topic name
              question={flashcards[currentCardIndex].question}
              answer={flashcards[currentCardIndex].answer}
              keyPoints={flashcards[currentCardIndex].keyPoints || []} // Ensure it's always an array
              resources={flashcards[currentCardIndex].resources || []} // Ensure it's always an array
              codeExample={flashcards[currentCardIndex].codeExample || ''} // Ensure empty string if no example
              tags={flashcards[currentCardIndex].tags || []} // Pass tags (or empty array)
              difficulty={flashcards[currentCardIndex].difficulty || 'medium'} // Default to "medium" if not set
              resetFlip={resetFlip} // Pass resetFlip to FlipCard
            />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-py">
      <div className="container">
        <div className="text-center">
            <h2 className="section-heading">Have a Topic in Mind?</h2>
            <p className="lead text-muted mb-3">Request a new topic or contribute flashcards to help others learn!</p>
            <button className="btn btn-primary me-3">Contribute</button>
            <button className="btn btn-outline-secondary">Request a Topic</button>
        </div>
        </div>
      </section>
    </>
  );
};

export default TopicFlashcards;