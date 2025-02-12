import React from 'react';
import niladriJyotiImage from '../assets/Niladri-Jyoti.jpg';

const TeamSection = () => (
    <section className="sec-py bg-light">
        <div className="container">
            <h2 className="section-heading text-center mb-5">The Team Behind</h2>
            <div className="d-flex align-items-center justify-content-center mt-4 p-4 bg-white shadow rounded">
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem'}}>
                <img
                    src={niladriJyotiImage}
                    alt="Niladri Jyoti"
                    className="rounded-circle mx-auto"
                    style={{ width: '200px', height: '200px' }}
                />
                <a
                        href="https://www.buymeacoffee.com/codenil"
                        target="_blank"
                        className="mx-auto"
                        rel="noopener noreferrer"
                        >
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                            alt="Buy Me A Coffee"
                            style={{ height: "49px", width: "177px", position: 'relative', top: '10px' }}
                        />
                </a>
                </div>
                <div className="text-start">
                    <h3 className="card-title">Niladri Jyoti</h3>
                    <p className="text-muted lead mb-1">Web Developer, Creator, Nature Lover</p>
                    <p className="text-muted mb-4 mt-3">Frontend Developer with a unique blend of creative (design and UI/UX) and technical (programming and web development) skills. I thrive on creating, collaborating, and building solutions that are not only effective but also easy to develop, maintain, and scale—leveraging the power of crowdsourcing. When I’m not coding, you’ll find me playing badminton, woodworking, hiking or simply enjoying the great outdoors.</p>
                    <a href="https://www.codenil.online/" className="btn btn-primary btn-sm me-2">Website</a>
                    <a href="https://www.linkedin.com/in/nil-sj/" className="btn btn-secondary btn-sm me-2">LinkedIn</a>
                    <a href="https://codenil.medium.com/" className="btn btn-info btn-sm me-2">Medium</a>
                </div>
            </div>
            <div className="mt-5 p-4 bg-white shadow rounded">
                <p className="fw-bold h5">🚀 This place is looking for people like you!</p>
                <p className="text-muted">Join us in contributing to Frontend Flashcards and help build a valuable learning resource.</p>
                <a href="#" className="btn btn-primary mt-3">Contribute Now</a>
            </div>
        </div>
    </section>
);

export default TeamSection;
