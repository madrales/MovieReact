import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from './Grid';
import HeroImage from './HeroImage';
import mason from '../images/mason.jpg';
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