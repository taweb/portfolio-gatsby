import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import CustomLink from './link';
import {colors, fontSizes, breakPoints} from '../theme/Variables';

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
    /* text-transform: uppercase; */
    letter-spacing: 3px;
`

const SecondaryText = styled(StyledSpan)`
    font-size: ${fontSizes.large};
`

const StyledCustomLink = styled(CustomLink)`
    margin: 0px 10px;
`

const Hero = () => {
    const data = useStaticQuery(graphql`
    query coverImgQuery {
        cover: file(relativePath: { eq: "cover.JPG" }) {
            childImageSharp {
                fluid(duotone: { highlight: "#7b8897", shadow: "#0f4975"}) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `)    
    return (
        <HeroWrapper>
            <StyledImg fluid={data.cover.childImageSharp.fluid} alt='Cover Image'/>
            <HeaderContainer>
                <HeaderText>
                    <PrimaryText>Tim Atherton</PrimaryText>
                    <SecondaryText>Web Developer</SecondaryText>
                </HeaderText>
                <StyledCustomLink to='/skills' type={'normal'} color={colors.white} highlight={colors.red}>Skills & Experience</StyledCustomLink>
                <StyledCustomLink to='/contact' type={'normal'} color={colors.white} highlight={colors.red}>Get in Touch</StyledCustomLink>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default Hero
 