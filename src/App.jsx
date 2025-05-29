import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import TopicFlashcards from './pages/TopicFlashcards';
import Resources from './pages/Resources';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<Flashcards />} />
          {/* <Route path="/flashcard/:topic" element={<TopicFlashcards />} /> */}
          <Route path="/flashcard" element={<TopicFlashcards />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;