import React from 'react';
import {Wrapper, Content} from './ContactInfo.styles';
import resume from '../../images/resume.jpg';

const ContactInfo = () => (
    <Wrapper>
        <div>
            CONTACT INFO
        </div>
        <Content>
            <span>
                <a href="https://www.linkedin.com/in/mason-adrales/" target="blank">LinkedIn: Mason Adrales</a>
                <a href="https://twitter.com/mason_adrales" target="blank">Twitter: @mason_adrales</a>
                <a href="https://www.instagram.com/mason_adrales/" target="blank">Instagram: @mason_adrales</a>
            </span>
        </Content>
    </Wrapper>
);

export default ContactInfo;