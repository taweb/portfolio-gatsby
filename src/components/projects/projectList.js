import React from 'react';
import projects from '../../data/projects.json'
import Project from './project'
import styled from 'styled-components'
import { breakPoints } from '../../theme/Variables.js';


const ProjectsContainer = styled.div`
    column-count: 1;
    column-gap: 20px;
    @media (${breakPoints.tablet}) {
        column-count: 2;
        column-gap: 20px;
    }
`

const Wrapper = styled.div`
`

const ProjectList = ({images}) => {
    const projectImages = images.allFile.edges
    return (
        <Wrapper>
            <ProjectsContainer>
                {projects.map((project, i) => {
                    const img = projectImages.find(n => {
                        return n.node.relativePath === `projects/${project.img}`;
                    });
                    return (
                        <Project key={i} project={project} image={img}>{project.name}</Project>
                    )
                })
                }
            </ProjectsContainer>
        </Wrapper>
    );
}
 
export default ProjectList;