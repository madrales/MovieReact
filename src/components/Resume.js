import React from 'react';
import HeroImage from './HeroImage';
import resume from '../images/resume.jpg';
import ResumeWrapper from './ResumeWrapper';


const Resume = () => {
    return (
        <>
            <HeroImage
                image="https://source.unsplash.com/random"
                title="Resume"
                text="This page will allow you to view my resume as well as some of the highlights in it."
            />
            <ResumeWrapper/>
        </>
    );
};

export default Resume;