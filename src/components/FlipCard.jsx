import React, { useState, useEffect } from 'react';

const FlipCard = ({ id, topic, question, answer, keyPoints = [], resources = [], codeExample = '', tags = [], difficulty, resetFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Reset the card to show the question side when `resetFlip` changes
  useEffect(() => {
    setIsFlipped(false);
  }, [resetFlip]);

  // Copy code example to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500); // Reset after 1.5 sec
  };

  // Format reference number (e.g., "Q Ref: HTML/001")
  const formattedId = String(id).padStart(3, '0');
  const referenceNumber = `Q Ref: ${topic}/${formattedId}`;

  // Difficulty Badge Colors
  const difficultyColors = {
    easy: '#d4edda',   // Light Green
    medium: '#fff3cd', // Light Yellow
    hard: '#f8d7da'    // Light Red
  };

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
          height: '420px', // Slightly taller card
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
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            fontSize: '1.25rem',
            fontWeight: 'bold',
          }}
        >
          <h3 className="question" style={{ textAlign: 'center' }}>{question}</h3>

          {/* Bottom Section: Tags, Difficulty, Reference */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}}>
            {/* Tags */}
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary" style={{ fontSize: '0.85rem' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Difficulty Badge & Reference */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                className="badge"
                style={{
                  backgroundColor: difficultyColors[difficulty?.toLowerCase()] || '#e2e3e5',
                  color: '#212529',
                  fontSize: '0.85rem',
                  padding: '5px 10px',
                }}
              >
                {difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}
              </span>
              <small className="text-muted" style={{ fontSize: '0.8rem', fontWeight: '400'}}>{referenceNumber}</small>
            </div>
          </div>
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
          <h6 className="mb-2">Answer:</h6>
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>

          {/* Key Points */}
          {keyPoints.length > 0 && (
            <>
              <h6 className="mt-3">Key Points:</h6>
              <ul style={{ listStyleType: "disc", marginLeft: "1rem"}}>
                {keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </>
          )}

          {/* Code Example */}
          {codeExample && (
            <>
              <h6 className="mt-3">Code Example:</h6>
              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '10px',
                  borderRadius: '5px',
                  position: 'relative',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  overflowX: 'auto',
                }}
              >
                <pre>
                  <code>{codeExample}</code>
                </pre>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard();
                  }}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    padding: '5px 10px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                  }}
                >
                  {copySuccess ? "Copied!" : "Copy"}
                </button>
              </div>
            </>
          )}

          {/* Resources */}
          {resources.length > 0 && (
            <>
              <h6 className="mt-3">Resources:</h6>
              <ul style={{ listStyleType: "disc", marginLeft: "1rem"}}>
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

// import React, { useState } from 'react';

// const FlipCard = ({ question, answer, keyPoints, resources, codeExample, resetFlip }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   // Reset the card to show the question side when `resetFlip` changes
//   React.useEffect(() => {
//     setIsFlipped(false);
//   }, [resetFlip]);

//   return (
//     <div
//       className={`flip-card ${isFlipped ? 'flipped' : ''}`}
//       onClick={handleFlip}
//       style={{ perspective: '1000px', cursor: 'pointer' }}
//     >
//       <div
//         className="flip-card-inner"
//         style={{
//           position: 'relative',
//           width: '100%',
//           height: '400px', // Increased the height for a larger card
//           transformStyle: 'preserve-3d',
//           transition: 'transform 0.6s',
//           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//         }}
//       >
//         {/* Front Side - Question */}
//         <div
//           className="flip-card-front"
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             backfaceVisibility: 'hidden',
//             backgroundColor: '#f8f9fa',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '20px',
//             border: '1px solid #dee2e6',
//             borderRadius: '8px',
//             fontSize: '1.25rem', // Slightly larger font
//             fontWeight: 'bold',
//           }}
//         >
//           <h3 className="question">{question}</h3>
//         </div>

//         {/* Back Side - Answer and Other Details */}
//         <div
//           className="flip-card-back"
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             backfaceVisibility: 'hidden',
//             backgroundColor: '#ffffff',
//             transform: 'rotateY(180deg)',
//             padding: '20px',
//             border: '1px solid #dee2e6',
//             borderRadius: '8px',
//             overflowY: 'auto',
//           }}
//         >
//           <h6 className="card-subtitle mb-2 text-muted">Answer:</h6>
//           <p dangerouslySetInnerHTML={{ __html: answer }}></p>
//           <h6 className="mt-3">Key Points:</h6>
//           <ul>
//             {keyPoints.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//           <h6 className="mt-3">Resources:</h6>
//           <ul>
//             {resources.map((resource, index) => (
//               <li key={index}>
//                 <a href={resource.url} target="_blank" rel="noopener noreferrer">
//                   {resource.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <h6 className="mt-3">Code Example:</h6>
//           <pre>
//             <code>{codeExample}</code>
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;
