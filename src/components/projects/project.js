import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, fontSizes, linkColors, breakPoints } from '../../theme/Variables.js';
import CustomLink from '../link';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const ProjectContainer = styled.figure`
    border: 2px solid ${colors.black};
    max-width: 300px;
    margin: 20px auto;
    page-break-inside: avoid;
    break-inside: avoid;
    :first-child {
        margin-top: 0;
    }
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const ProjectCaption = styled.figcaption`
    text-align: center;
    font-size: ${fontSizes.medium};
`

const ButtonContainer = styled.a`
    width: 100%;
    padding: 1.5rem 0;
    text-decoration: none;
    text-align: center;
    font-size: ${fontSizes.normal};
    background: ${colors.black};
    color: ${colors.white};
    cursor: pointer;
    @media (${breakPoints.desktop}) {
        transition: none;
    }
    :hover {
        opacity: 0.8;
    }
    :focus {
        outline: 2px solid white;
        outline-offset: -5px;
    }
`


const Project = ({children, project, image}) => {
    const imageSizes = image.node.childImageSharp.sizes
    const repoUrl = project.links.find(link => link.name || null === 'repo').url || null
    return (
        <ProjectContainer>
            <CustomLink as='a' type={'none'} href={repoUrl}>
                <Img
                    title={project.name}
                    alt={'Project Screenshot'}
                    sizes={imageSizes}
                />
                <ProjectCaption>{project.name}</ProjectCaption>
            </CustomLink>
            <LinkContainer>
                {project.links.map((link, i) => {
                    const linkType = link.name;
                    const linkColor = linkColors[linkType] || "";                       
                    return (
                        <ButtonContainer href={`${link.url}`} key={i} style={{background: `${linkColor}`}}>
                            {capitalize(link.name)}
                        </ButtonContainer>
                    )
                })}
            </LinkContainer>
        </ProjectContainer>
    );
}
 
export default Project;