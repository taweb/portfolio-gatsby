import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    padding: 1em;
`

const Footer = ({className}) => {
    return (
        <StyledFooter className={className}>
            <p>{new Date().getFullYear()} Tim Atherton</p>
        </StyledFooter>
    );
}
 
export default Footer;