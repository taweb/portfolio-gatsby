import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import CustomLink from './link';
import {colors, fontSizes, breakPoints, layout} from '../theme/Variables';

const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - ${layout.headerHeight});
    @media (${breakPoints.desktop}) {
        height: calc(100vh - ${layout.footerHeight});
    }
`

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;   
    @media (${breakPoints.desktop}) {
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
`

const HeaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    padding: 0px 20px;
    font-size: ${fontSizes.medium};
    @media (${breakPoints.tablet}) {
        top: 20%;
    }
    @media (${breakPoints.desktop}) {
        left: calc(50% + (${layout.sidebarWidth})/2);
        width: calc(100% - ${layout.sidebarWidth});
        top: 30%;
    }
`

const HeaderText = styled.h1`
    color: ${colors.white};
    text-shadow: 1px 1px 2px ${colors.black};
    margin-bottom: 2rem;
`

const StyledSpan = styled.span`
    display: block;
`

const PrimaryText = styled(StyledSpan)`
    font-size: ${fontSizes.title};
    margin-bottom: 10px;
    letter-spacing: 3px;
`

const SecondaryText = styled(StyledSpan)`
    font-size: ${fontSizes.large};
`

const StyledCustomLink = styled(CustomLink)`
    margin: 0px 10px;
`

const QuickLinkContainer = styled.p`
    display: block;
    font-size: ${fontSizes.medium};
    @media (${breakPoints.mobile}) {
        display: inline;
    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
    query coverImgQuery {
        cover: file(relativePath: { eq: "cover.JPG" }) {
            childImageSharp {
                fluid(maxWidth: 1500, duotone: { highlight: "#7b8897", shadow: "#0f4975"}) {
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
                    <SecondaryText>I'm a Web Developer in Bristol, UK</SecondaryText>
                </HeaderText>
                <QuickLinkContainer>
                    <StyledCustomLink to='/skills' type={'normal'} color={colors.white} highlight={colors.redDarkened}>Skills & Experience</StyledCustomLink>
                </QuickLinkContainer>
                <QuickLinkContainer>
                    <StyledCustomLink to='/contact' type={'normal'} color={colors.white} highlight={colors.redDarkened}>Get in Touch</StyledCustomLink>
                </QuickLinkContainer>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default Hero
 