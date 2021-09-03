import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, Text, LogoImg, TMDBLogoImg } from './Header.styles';


const Header = () => (
    <Wrapper>
        {/* <LogoImg src={RMDBLogo} alt='rmdb-logo'/> */}
        <Content>
        <Link to='/'>
                <Text>
                    HOME
                </Text>
            </Link>
            <Link to='movieProject'>
                <Text>
                    PROJECTS
                </Text>
            </Link>
            <Link to='resume'>
                <Text>
                    RESUME
                </Text>
            </Link>
            <Link to='contact'>
                <Text>
                    CONTACT
                </Text>
            </Link>
        </Content>
    </Wrapper>
);

export default Header;