import React from 'react';
import { Link } from 'react-router-dom';

//styles
import {Image} from './Thumb.styles';
import PropTypes from 'prop-types';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie-thumbnail"/>
            </Link>
        ) : (
            <Image src={image} alt="movie-thumbnail"/>
        )}
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
};

export default Thumb;