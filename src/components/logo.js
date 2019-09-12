import React, {Component} from 'react';
import CustomLink from './link';
import styled from 'styled-components';
import {colors, fontSizes} from '../theme/Variables';

const StyledLogo = styled.div`
    a {
        font-size: ${fontSizes.large};
    }
`

class Logo extends Component {
    toggle = () => {
        const {isOpen, onClickHandler} = this.props
        if (!isOpen) {
            return
        }
        onClickHandler()
    }

    render() {
        const {siteTitle, isOpen} = this.props
        return (
            <StyledLogo 
                isOpen={isOpen}
                onClick={this.toggle}
            >
                <CustomLink
                    to="/"
                    type={'none'}
                >
                    {siteTitle}
                </CustomLink>
            </StyledLogo>
        );
    }
}
 
export default Logo;