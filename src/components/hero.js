import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import CustomLink from './link';
import {colors, fontSizes} from '../theme/Variables';

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
    width: 100%;
    text-align: center;
    padding: 0 20px;
    font-size: ${fontSizes.medium};
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
    font-size: ${fontSizes.xlarge};
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 5px;
`

const SecondaryText = styled(StyledSpan)`
    font-size: ${fontSizes.large};
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
                <CustomLink to='/skills' type={'normal'} color={colors.white} highlight={colors.red}>Skills & Experience</CustomLink>
                <CustomLink to='/contact' type={'normal'} color={colors.white} highlight={colors.red}>Get in Touch</CustomLink>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default hero
 