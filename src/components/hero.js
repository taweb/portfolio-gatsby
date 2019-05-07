import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {colors} from '../theme/Variables';

const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
`

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    position: absolute;
    top: 0;
    left: 0;
`

const Overlay = styled.div`
    background: linear-gradient(
        90deg, rgba(2,0,36,0.5) 0%, 
        rgba(9,9,121,0.5) 35%, 
        rgba(0,212,255,0.5) 100%
    );
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    position: absolute;
    top: 0;
    left: 0;
`

const HeaderContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; 
`

const HeaderText = styled.h1`
    color: ${colors.white};
    text-shadow: 1px 1px 2px ${colors.black};
    margin-bottom: 10px;
`

const StyledSpan = styled.span`
    display: block;
`

const PrimaryText = styled(StyledSpan)`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;    
`

const SecondaryText = styled(StyledSpan)`
    font-size: 1.5rem;
    font-weight: 400;
`

const StyledButton = styled.button`
    display: block;
    background: white;
    margin: 0.5rem auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0px 1px 4px ${colors.black};
    font-size: 1rem;
`

const hero = () => {
    const data = useStaticQuery(graphql`
    query coverImgQuery {
        cover: file(relativePath: { eq: "cover.JPG" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `)

    return (
        <HeroWrapper>
            <StyledImg fluid={data.cover.childImageSharp.fluid} alt='Cover Image'/>
            <Overlay/>
            <HeaderContainer>
                <HeaderText>
                    <PrimaryText>Tim Atherton</PrimaryText>
                    <SecondaryText>Web Developer</SecondaryText>
                </HeaderText>
                <StyledButton>
                    <Link to='/skills'>Skills & Experience</Link>
                </StyledButton>
                <StyledButton>
                    <Link to='/contact'>Get in Touch</Link>
                </StyledButton>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default hero
 