import React from 'react';
import styled from 'styled-components';

const SkillsHeader = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
`

const SkillsList = styled.div`
    text-align: center;
`

const Skills = () => {
    return (
        <>
            <h2>Skills</h2>
            <SkillsList>
                <p>Front-end development // HTML5, CSS3, Javascript (ES6), React, Redux, Gatsby, SASS, LESS, grid systems (Grid/Flexbox), responsive design, Bootstrap</p>
                <p>Mobile development // React Native</p>
                <p>Back-end development // PHP, MySQL, APIs, Laravel, Server-side admin</p>
                <p>Tooling // Git, GitLab, Command Line, Vagrant, Gulp, NPM, Yarn, Webpack, Chrome/React/Redux Dev Tools</p>
                <p>Design // Photoshop, Balsamiq</p>
                <p>CMSs // Wordpress</p>
            </SkillsList>
        </>
    );
}
 
export default Skills
