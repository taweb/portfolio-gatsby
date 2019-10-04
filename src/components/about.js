import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { colors, fontSizes, breakPoints } from '../theme/Variables.js';

const StyledImg = styled(Img)`
    border: 3px solid ${colors.black};
    border-radius: 50%;
`

const Summary = styled.p`
    font-size: ${fontSizes.medium};
    font-weight: bold;
`

const Container = styled.div`
    display: grid;
    grid-gap: 15px 20px;
    justify-items: center;
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
            <h1>About Me</h1>
            <Container>
                <StyledImg fixed={data.cover.childImageSharp.fixed} alt='Portrait of Me'/>
                <Summary>Hello, I'm Tim Atherton, a Junior Web Developer based in Bristol, UK. I have over 1 year of front-end web development experience, largely using React.</Summary>
                <p>I'm currently working for FlexiDB, a web technologies consultancy with a focus on creating scalable and real-time application solutions for clients. The company also develops products in-house, such as the Mind Doodle mind mapping and project management tool.</p>
                <p>In my spare time I am a keen rower and enjoy competing with the team at various local and national events throughout the year. I love travelling to interesting corners of the world (I already have Japan in mind for the next big trip!) and also have an obsession with Glastonbury Festival having attended the last 6 years in a row.</p>
            </Container>
        </>
     );
}
 
export default About;