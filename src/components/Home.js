import React from 'react';
import Grid from './Grid';
import Album from './Album';
import HeroImage from './HeroImage';
import mason from '../images/mason.jpg';

const Home = () => {
    return (
        <>
            <HeroImage
                image={mason}
                title="Mason Adrales Portfolio Website"
                text="Throughout my time at the University of Missouri, I was fortunate to take multiple web development courses. These classes helped to lead me towards the industry that I wish to pursue post-graduation: web development. With experience in HTML, CSS, Javascript, React.js, Angular, and other technologies, I hope to find the position that is right for me."
            />
            <Album/>
        </>
    );
};

export default Home;