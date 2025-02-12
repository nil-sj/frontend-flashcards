import React from 'react';
import AboutSection from '../components/AboutSection';
import Achievements from '../components/Achievements';
import TeamSection from '../components/TeamSection';
import FeaturedTestimonials from '../components/FeaturedTestimonials';
import ContactForm from '../components/ContactForm';

const About = () => {
  return (
    <>
      <AboutSection/>
      <Achievements/>
      <TeamSection/>
      <FeaturedTestimonials/>
      <ContactForm/>
    </>
  );
};

export default About;