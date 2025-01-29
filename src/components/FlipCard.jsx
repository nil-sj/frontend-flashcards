import React, { useState } from 'react';

const FlipCard = ({ question, answer, keyPoints, resources, codeExample, resetFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Reset the card to show the question side when `resetFlip` changes
  React.useEffect(() => {
    setIsFlipped(false);
  }, [resetFlip]);

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      style={{ perspective: '1000px', cursor: 'pointer' }}
    >
      <div
        className="flip-card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '400px', // Increased the height for a larger card
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side - Question */}
        <div
          className="flip-card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            fontSize: '1.25rem', // Slightly larger font
            fontWeight: 'bold',
          }}
        >
          <h3 className="question">{question}</h3>
        </div>

        {/* Back Side - Answer and Other Details */}
        <div
          className="flip-card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#ffffff',
            transform: 'rotateY(180deg)',
            padding: '20px',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            overflowY: 'auto',
          }}
        >
          <h6 className="card-subtitle mb-2 text-muted">Answer:</h6>
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
          <h6 className="mt-3">Key Points:</h6>
          <ul>
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h6 className="mt-3">Resources:</h6>
          <ul>
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
          <h6 className="mt-3">Code Example:</h6>
          <pre>
            <code>{codeExample}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
