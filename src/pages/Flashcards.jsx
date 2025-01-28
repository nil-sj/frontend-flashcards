import React from 'react';
import TopicCard from '../components/TopicCard';

const Flashcards = () => {
  // Data for the topic tiles
  const topics = [
    {
        title: 'HTML',
        description: 'Learn the building blocks of the web with HyperText Markup Language.',
        link: '/flashcard?topic=html',
        color: '#ffeeba', // Light yellow background
    },
    {
        title: 'CSS',
        description: 'Style your web pages with Cascading Style Sheets for better presentation.',
        link: '/flashcard?topic=css',
        color: '#d4edda', // Light green background
    },
    {
        title: 'JavaScript',
        description: 'Make your web pages interactive and dynamic with JavaScript.',
        link: '/flashcard?topic=javascript',
        color: '#cce5ff', // Light blue background
    },
    {
        title: 'Accessibility',
        description: 'Learn how to make your web content accessible to everyone.',
        link: '/flashcard?topic=accessibility',
        color: '#f8d7da', // Light red background
    },
    {
        title: 'React',
        description: 'Master the popular JavaScript library for building user interfaces.',
        link: '/flashcard?topic=react',
        color: '#d4edda', // Light green background
    },
    {
        title: 'Responsive Web Design',
        description: 'Create layouts that adapt seamlessly to different screen sizes.',
        link: '/flashcard?topic=responsive-web-design',
        color: '#d1ecf1', // Light blue background
    },
    {
        title: 'UI/UX',
        description: 'Learn design principles for creating intuitive and user-friendly interfaces.',
        link: '/flashcard?topic=uiux',
        color: '#fff3cd', // Light yellow background
    },
    {
        title: 'Bootstrap',
        description: 'Build responsive websites quickly using the Bootstrap framework.',
        link: '/flashcard?topic=bootstrap',
        color: '#e2e3e5', // Light gray background
    },
    {
        title: 'React Native',
        description: 'Create native mobile applications using React Native.',
        link: '/flashcard?topic=react-native',
        color: '#cce5ff', // Light blue background
    },
    {
        title: 'Redux',
        description: 'Simplify state management for complex React applications with Redux.',
        link: '/flashcard?topic=redux',
        color: '#f5c6cb', // Light pink background
    },
    {
        title: 'TypeScript',
        description: 'Enhance your JavaScript with TypeScript for better type safety and scalability.',
        link: '/flashcard?topic=typescript',
        color: '#d1ecf1', // Light blue background
    },
    {
        title: 'Git',
        description: 'Learn the basics of version control and Git workflows for better project management.',
        link: '/flashcard?topic=git',
        color: '#c3e6cb', // Light green background
    },
];

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
          {topics.map((topic, index) => (
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