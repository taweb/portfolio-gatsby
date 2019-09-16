import React from 'react';
import styled from 'styled-components';
import {colors, breakPoints} from '../theme/Variables';
import { Link } from 'gatsby';

const StyledLink = styled(({color, type, highlight, ...rest}) => <Link {...rest} />)`
    margin: 5px 10px;
    color: ${({color}) => color || `${colors.black}`};
    background-image: ${({color, type, highlight}) =>
        type === 'underline' ?
        `linear-gradient(${color || colors.black}, ${color || colors.black})`
        : type === 'normal' ?
        `linear-gradient(${color || colors.black}, ${color || colors.black}), linear-gradient(${highlight || colors.grey}, ${highlight || colors.grey})`
        : type === 'none' ?
        'none' : ''
    };
`;

const CustomLink = (props) => {     
    return ( 
        <StyledLink {...props}/>
    );
}
 
export default CustomLink;