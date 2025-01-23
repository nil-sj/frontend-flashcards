import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import topicsConfig from '../../public/data/topics-config.json';

const TopicFlashcards = () => {
    const [searchParams] = useSearchParams();
    const topicSlug = searchParams.get('topic');
    const [flashcards, setFlashcards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        // Find the topic from the topicsConfig using the slug
        const topic = topicsConfig.find((t) => t.slug === topicSlug);

        if (topic) {
        console.log(topic);    
        // Fetch the corresponding JSON file for the topic
        fetch(`/data/${topic.file}`) // Correctly use the `file` property
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
        setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
    };

    const handleNext = () => {
        setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
    };

    if (!flashcards.length) {
        return (
        <p className="text-center mt-4">
            No flashcards available for this topic. Please select another topic.
        </p>
        );
    }

    return (
        <div>
        <h1>{topicSlug.toUpperCase()} Flashcards</h1>
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Question:</h5>
                <p>{flashcards[currentCardIndex].question}</p>
                <h6 className="card-subtitle mb-2 text-muted">Answer:</h6>
                <p dangerouslySetInnerHTML={{ __html: flashcards[currentCardIndex].answer }}></p>
                <h6 className="mt-3">Key Points:</h6>
                <ul>
                {flashcards[currentCardIndex].keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
                </ul>
                <h6 className="mt-3">Resources:</h6>
                <ul>
                {flashcards[currentCardIndex].resources.map((resource, index) => (
                    <li key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        {resource.name}
                    </a>
                    </li>
                ))}
                </ul>
                <h6 className="mt-3">Code Example:</h6>
                <pre>
                <code>{flashcards[currentCardIndex].codeExample}</code>
                </pre>
            </div>
        </div>
        <button className="btn btn-secondary me-2" onClick={handlePrevious}>
            Previous
        </button>
        <button className="btn btn-secondary me-2" onClick={handleNext}>
            Next
        </button>
        <Link to="/flashcardlist" className="btn btn-primary">
            Back to Topics
        </Link>
        </div>
    );
};

export default TopicFlashcards;