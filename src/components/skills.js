import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.div`
    text-align: center;
`

const Skills = () => {
    return (
        <>
            <h2>Skills</h2>
            <SkillsList>
                <p><strong>Front-end development //</strong> HTML5, CSS3, Javascript (ES6), React, Redux, Gatsby, SASS, LESS, grid systems (Grid/Flexbox), responsive design, Bootstrap</p>
                <p><strong>Mobile development //</strong> React Native</p>
                <p><strong>Back-end development //</strong> PHP, MySQL, APIs, Laravel, Server-side admin</p>
                <p><strong>Tooling //</strong> Git, GitLab, Command Line, Vagrant, Gulp, NPM, Yarn, Webpack, Chrome/React/Redux Dev Tools</p>
                <p><strong>Design //</strong> Photoshop, Balsamiq</p>
                <p><strong>CMSs //</strong> Wordpress</p>
            </SkillsList>
        </>
    );
}
 
export default Skills
