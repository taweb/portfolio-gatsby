import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme/Variables';
import { Link } from 'gatsby';

const StyledLink = styled(({color, type, ...rest}) => <Link {...rest} />)`
    margin: 5px 10px;
    color: ${({color}) => color || `${colors.black}`};
    &::after, &::before {
        display: ${({type}) => type === 'none' ? 'none' : 'block'};
        background-color: ${({color}) => color || `${colors.black}`};
    }
    &::after {
        display: ${({type}) => type === 'underline' || type === 'none' ? 'none' : 'block'}
    }
`;

const CustomLink = (props) => {     
    return ( 
        <StyledLink {...props}/>
    );
}
 
export default CustomLink;