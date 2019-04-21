import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    padding: 2em;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>{new Date().getFullYear()} Tim Atherton</p>
        </StyledFooter>
    );
}
 
export default Footer;