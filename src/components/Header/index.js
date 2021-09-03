import React from 'react';
import { Link } from 'react-router-dom';


import { Wrapper, Content, Text } from './Header.styles';


const Header = () => (
    <Wrapper>
        {/* <LogoImg src={RMDBLogo} alt='rmdb-logo'/> */}
        <Content>
        <Link to='/'>
                <Text>
                    HOME
                </Text>
            </Link>
            <Link to='projects'>
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