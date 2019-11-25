import React from 'react';
import styled from 'styled-components';
import {colors, breakPoints} from '../theme/Variables';
import {isHomepage} from '../utilities'; 

const StyledFooter = styled.footer`
    text-align: center;
    padding: 1em;
`

const StyledAnchor = styled.a`
    color: ${(props) => isHomepage(props.path) && 'white'};
    background-image: ${(props) => isHomepage(props.path) && `linear-gradient(${colors.white}, ${colors.white})`};
    @media (${breakPoints.desktop}) {
        color: ${(props) => isHomepage(props.path) && `${colors.black}`};
        background-image: ${(props) => isHomepage(props.path) && `linear-gradient(${colors.black}, ${colors.black})`};
    }
`

const Footer = ({className, path}) => {
    return (
        <StyledFooter className={className}>
            <p>Made with <StyledAnchor href='https://www.gatsbyjs.org/' path={path}>Gatsby</StyledAnchor> &#128640;, check out the <StyledAnchor href='https://github.com/taweb/portfolio-gatsby' path={path}>repo</StyledAnchor></p>
            <p>{new Date().getFullYear()} Tim Atherton</p>
        </StyledFooter>
    );
}
 
export default Footer;