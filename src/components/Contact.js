import React from 'react';
import HeroImage from './HeroImage';
import mason from '../images/mason.jpg';

const Contact = () => {
    return (
        <>
            <HeroImage
                image={mason}
                title="Contact"
                text="This page will have my contact information within it."
            />
        </>
    );
};

export default Contact;