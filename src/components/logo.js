import React, {Component} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {colors} from '../theme/Variables';

const StyledLogo = styled.div`
  a {
    transition: color 0.3s ease-out;
    font-size: 2rem;
    :link,
    :visited,
    :focus {
      color: ${(props) => props.isOpen ? `${colors.white}` : `${colors.black}`}
    }
    :hover,
    :active {
      color: ${colors.grey}
    }
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
                <Link
                    to="/"
                >
                {siteTitle}
                </Link>
            </StyledLogo>
        );
    }
}
 
export default Logo;