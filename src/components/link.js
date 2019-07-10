import React from 'react';
import styled from 'styled-components';
import {colors, fontSizes} from '../theme/Variables';
import { Link } from 'gatsby';

const StyledLink = styled(({color, ...rest}) => <Link {...rest} />)`
    font-size: ${fontSizes.normal};
    margin: 5px 10px;
    position: relative;
    :link,
    :visited,
    :hover,
    :active {
        color: ${({color}) => color || `${colors.black}`};
    }
    ::after {
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        height: 2px;
        content: '';
        background-color: ${({color}) => color || `${colors.black}`};
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    :hover::after {
        opacity: 1;
    }
`;

const CustomLink = (props) => {     
    return ( 
        <StyledLink {...props}/>
    );
}
 
export default CustomLink;