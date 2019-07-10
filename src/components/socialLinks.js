import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.div`
    width: 100%;
    justify-content: space-between;
`

const SocialLinks = ({className}) => {
    return ( 
        <LinkContainer className={className}>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>GitHub</p>
        </LinkContainer>
    );
}
 
export default SocialLinks;