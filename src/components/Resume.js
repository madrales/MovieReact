import React from 'react';
import HeroImage from './HeroImage';
import resume from '../images/resume.jpg';


const Resume = () => {
    return (
        <>
            <HeroImage
                image={resume}
                title="Resume"
                text="This page will allow you to view my resume as well as some of the highlights in it."
            />
        </>
    );
};

export default Resume;