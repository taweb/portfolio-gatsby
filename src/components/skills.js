import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    /* background-color: green; */
    padding: 1.5rem 1rem; 
`

const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;
`

const SkillsHeader = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
`

const SkillsList = styled.div`
    text-align: center;
    margin: 2rem 0;
`

const Paragraph = styled.p`
    margin-bottom: 1rem;
    p+p {

    }
`

const Skills = () => {
    return (
        <StyledSection>
            <Content>
                <SkillsHeader>Skills</SkillsHeader>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Commodo ullamcorper a lacus vestibulum sed arcu non. Vel eros donec ac odio tempor orci dapibus ultrices in. Sit amet luctus venenatis lectus. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. In metus vulputate eu scelerisque felis. Lacus luctus accumsan tortor posuere ac ut. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus nisl tincidunt eget nullam non nisi est.</p>
                <SkillsList>
                  <Paragraph>Front-end development // HTML5, CSS3, Javascript (ES6), React, Redux, Gatsby, SASS, LESS, grid systems (Grid/Flexbox), responsive design, Bootstrap</Paragraph>
                  <Paragraph>Mobile development // React Native</Paragraph>
                  <Paragraph>Back-end development // PHP, MySQL, APIs, Laravel, Server-side admin</Paragraph>
                  <Paragraph>Tooling // Git, GitLab, Command Line, Vagrant, Gulp, NPM, Yarn, Webpack, Chrome/React/Redux Dev Tools</Paragraph>
                  <Paragraph>Design // Photoshop, Balsamiq</Paragraph>
                  <Paragraph>CMSs // Wordpress</Paragraph>
                </SkillsList>
            </Content>
        </StyledSection>
    );
}
 
export default Skills
