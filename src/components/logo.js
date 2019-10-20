import React, {Component} from 'react';
import CustomLink from './link';
import styled from 'styled-components';
import { fontSizes } from '../theme/Variables';

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
        const {siteTitle} = this.props
        return (
            <StyledLogo>
                <CustomLink
                    to='/'
                    type={'none'}
                    onClick={this.toggle}
                >
                    {siteTitle}
                </CustomLink>
            </StyledLogo>
        );
    }
}
 
export default Logo;