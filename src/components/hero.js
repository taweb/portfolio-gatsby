import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import CustomLink from './link';
import socialLinks from './socialLinks';
import {colors, fontSizes, breakPoints, layout} from '../theme/Variables';
import SocialLinks from './socialLinks';

const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${colors.white};
    @media (${breakPoints.desktop}) {
        height: 90vh;
        background: none;
    }
`

const StyledImg = styled(Img)`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* min-height: 300px;
    max-height: calc(100vh - ${layout.footerHeight}); */
    height: 100%;   
    @media (${breakPoints.desktop}) {
        clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
        height: 100%;
    }
`

const HeaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: calc(${layout.headerHeight} + 40px);
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    padding: 0px 20px;
    font-size: ${fontSizes.medium};
    @media (${breakPoints.mobile}) {
        top: calc(${layout.headerHeight} + 70px);
    }
    @media (${breakPoints.tablet}) {
        top: 40%;
        transform: translate(-50%, -50%);
        padding: 0px 20px;
    }
    @media (${breakPoints.desktop}) {
        left: calc(50% + (${layout.sidebarWidth})/2);
        width: calc(100% - ${layout.sidebarWidth});
    }
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

const StyledSocialLinks = styled(SocialLinks)`
    width: 100%;
    display: flex;
    align-items: space-between;
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
                    <SecondaryText>Web Developer</SecondaryText>
                </HeaderText>
                <QuickLinkContainer>
                    <StyledCustomLink to='/skills' type={'normal'} color={colors.white} highlight={colors.red}>Skills & Experience</StyledCustomLink>
                </QuickLinkContainer>
                <QuickLinkContainer>
                    <StyledCustomLink to='/contact' type={'normal'} color={colors.white} highlight={colors.red}>Get in Touch</StyledCustomLink>
                </QuickLinkContainer>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default Hero
 