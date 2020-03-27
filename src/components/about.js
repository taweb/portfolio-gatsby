import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { colors, fontSizes, breakPoints } from '../theme/Variables.js';
import PageHeader from './pageHeader'


const StyledImg = styled(Img)`
    border: 2px solid ${colors.black};
    border-radius: 50%;
    justify-self: center;
`

const Summary = styled.p`
    font-size: ${fontSizes.medium};
    font-weight: bold;
`

const Container = styled.div`
    display: grid;
    grid-gap: 15px 20px;
    @media (${breakPoints.desktop}) {
        grid-gap: 15px 30px;
        grid-template-columns: repeat(2, 1fr);
    }
`

const About = () => {
    const data = useStaticQuery(graphql`
    query portraitImgQuery {
        cover: file(relativePath: { eq: "portrait.JPG" }) {
            childImageSharp {
                fixed(width: 250, height: 250) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  `)
    return ( 
        <>
            <PageHeader>About Me</PageHeader>
            <Container>
                <StyledImg fixed={data.cover.childImageSharp.fixed} alt='Portrait of Me'/>
                <Summary>Hello, I'm Tim Atherton, a Web Developer based in Bristol, UK. I have 2 years of front-end web development experience, developing user interfaces for apps (using React) and websites.</Summary>
                <p>I have recently been working at <a href="https://appeal.digital/">Appeal Digital</a>, a growing and fast paced web design and development agency based in Bristol.</p>
                <p>In my spare time I am a keen rower and enjoy competing with the team at various local and national events throughout the year. I love travelling to interesting corners of the world (I already have Japan in mind for the next big trip!) and also have an obsession with Glastonbury Festival having attended the last 6 years in a row.</p>
            </Container>
        </>
     );
}
 
export default About;