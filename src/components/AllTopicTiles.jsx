import React from 'react';
import TopicCard from './TopicCard';

const AllTopicTiles = () => {
  // Data for the topic tiles
  const topics = [
    {
        title: 'HTML',
        description: 'Learn the building blocks of the web with HyperText Markup Language.',
        link: '/flashcards?topic=html',
        color: '#ffeeba', // Light yellow background
    },
    {
        title: 'CSS',
        description: 'Style your web pages with Cascading Style Sheets for better presentation.',
        link: '/flashcards?topic=css',
        color: '#d4edda', // Light green background
    },
    {
        title: 'JavaScript',
        description: 'Make your web pages interactive and dynamic with JavaScript.',
        link: '/flashcards?topic=javascript',
        color: '#cce5ff', // Light blue background
    },
    {
        title: 'Accessibility',
        description: 'Learn how to make your web content accessible to everyone.',
        link: '/flashcards?topic=accessibility',
        color: '#f8d7da', // Light red background
    },
    {
        title: 'React',
        description: 'Master the popular JavaScript library for building user interfaces.',
        link: '/flashcards?topic=react',
        color: '#d4edda', // Light green background
    },
    {
        title: 'Responsive Web Design',
        description: 'Create layouts that adapt seamlessly to different screen sizes.',
        link: '/flashcards?topic=responsive-web-design',
        color: '#d1ecf1', // Light blue background
    },
    {
        title: 'UI/UX',
        description: 'Learn design principles for creating intuitive and user-friendly interfaces.',
        link: '/flashcards?topic=uiux',
        color: '#fff3cd', // Light yellow background
    },
    {
        title: 'Bootstrap',
        description: 'Build responsive websites quickly using the Bootstrap framework.',
        link: '/flashcards?topic=bootstrap',
        color: '#e2e3e5', // Light gray background
    },
    {
        title: 'React Native',
        description: 'Create native mobile applications using React Native.',
        link: '/flashcards?topic=react-native',
        color: '#cce5ff', // Light blue background
    },
    {
        title: 'Redux',
        description: 'Simplify state management for complex React applications with Redux.',
        link: '/flashcards?topic=redux',
        color: '#f5c6cb', // Light pink background
    },
    {
        title: 'TypeScript',
        description: 'Enhance your JavaScript with TypeScript for better type safety and scalability.',
        link: '/flashcards?topic=typescript',
        color: '#d1ecf1', // Light blue background
    },
    {
        title: 'Git',
        description: 'Learn the basics of version control and Git workflows for better project management.',
        link: '/flashcards?topic=git',
        color: '#c3e6cb', // Light green background
    },
    {
      title: 'Next.js',
      description: 'Learn the basics of Next.js for ... more content to be added here at a later date.',
      link: '/flashcards?topic=nextjs',
      color: '#c3e6cb', // Light green background
  }
];

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
          {topics.map((topic, index) => (
            <TopicCard topic={topic} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTopicTiles;