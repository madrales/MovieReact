import React from 'react';
import Grid from './Grid';
import ProjectAlbum from './ProjectAlbum';
import HeroImage from './HeroImage';
import mason from '../images/mason.jpg';

const Projects = () => {
    return (
        <>
            <HeroImage
                image="https://source.unsplash.com/random"
                title="Projects"
                text="This page shows a collection of the projects that I have completed in either the classroom or in my personal time"
            />
            <ProjectAlbum/>
        </>
    );
};

export default Projects;