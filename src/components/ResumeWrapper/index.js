import React from 'react';
import {Wrapper, Content} from './Resume.styles';
import resume from '../../images/resume.jpg';

const ResumeWrapper = () => (
    <Wrapper>
        <Content>
            <img src={resume} alt="resume"></img>
        </Content>
    </Wrapper>
);

export default ResumeWrapper;