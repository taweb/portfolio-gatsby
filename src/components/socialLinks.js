import React from 'react';
import styled from 'styled-components';
import CustomLink from './link';
import {fontSizes, colors} from '../theme/Variables';


const LinkContainer = styled.div`
    font-size: ${fontSizes.normal};
`

const SocialLinks = ({className}) => {
    return ( 
        <LinkContainer className={className}>
            <CustomLink
                type={'none'}
                as='a'
                href='https://github.com/taweb'
                color={colors.white}
            >
                GitHub
            </CustomLink>
            <CustomLink
                type={'none'}
                as='a'
                href='https://www.linkedin.com/in/tim-atherton-7726bb5a/'
                color={colors.white}
            >
                LinkedIn
            </CustomLink>
            <CustomLink
                type={'none'}
                as='a'
                href='https://www.instagram.com/th_atherton/'
                color={colors.white}
            >
                Instagram
            </CustomLink>
        </LinkContainer>
    );
}
 
export default SocialLinks;