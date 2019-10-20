import React from 'react';
import styled from 'styled-components';
import CustomLink from './link';
import {fontSizes, colors} from '../theme/Variables';


const LinkContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    font-size: ${fontSizes.normal};
`

const SocialLinks = ({className}) => {
    return ( 
        <LinkContainer className={className}>
            <CustomLink
                type={'none'}
                highlight={colors.red}
                as='a'
                href='https://github.com/taweb'
            >
                GitHub
            </CustomLink>
            <CustomLink
                type={'none'}
                highlight={colors.red}
                as='a'
                href='https://www.linkedin.com/in/tim-atherton-7726bb5a/'
            >
                LinkedIn
            </CustomLink>
            <CustomLink
                type={'none'}
                highlight={colors.red}
                as='a'
                href='https://www.instagram.com/th_atherton/'
            >
                Instagram
            </CustomLink>
        </LinkContainer>
    );
}
 
export default SocialLinks;