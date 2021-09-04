import React from 'react';
import HeroImage from './HeroImage';
import mason from '../images/mason.jpg';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <>
            <HeroImage
                image="https://source.unsplash.com/random"
                title="Contact"
                text="This page will have my contact information within it."
            />
            <ContactInfo/>
        </>
    );
};

export default Contact;