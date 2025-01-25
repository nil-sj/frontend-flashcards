import React from 'react';
import BlueBanner from '../components/BlueBanner';
import Hero from '../components/Hero';
import FeaturedCards from '../components/FeaturedCards';
import TopicTiles from '../components/TopicTiles';
import Achievements from '../components/Achievements';
import ResourcesPromo from '../components/ResourcePromo';
import ContributePromo from '../components/ContributePromo';
import FeaturedTestimonials from '../components/FeaturedTestimonials';

const Home = () => {
    return (
        <>
            <BlueBanner/>
            <Hero/>
            <FeaturedCards/>
            <TopicTiles/>
            <Achievements/>
            <ResourcesPromo/>
            <ContributePromo/>
            <FeaturedTestimonials/>
        </>
    );
};

export default Home;