import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {colors, breakPoints, layout, fontSizes} from '../../theme/Variables';
import Hamburger from './hamburger';
import Logo from '../logo';
import SocialLinks from '../socialLinks';
import ModelMenu from './model';
import CustomLink from '../link';

const HeaderWrapper = styled.header`
  padding: 1rem;
  position: fixed;
  top: 0;
  height: ${layout.headerHeight};
  width: 100%;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryBlue};
  transition: background-color 0.5s ease;
  @media (${breakPoints.desktop}) {
      flex-direction: column;
      padding: 1rem;
      text-align: center;
  }
`
  
const ListItem = styled.li`
  padding: 0.5rem;
  font-size: ${fontSizes.medium};
`

const HeaderNavigation = styled.nav`
  display: none;
  @media (${breakPoints.desktop}) {
      display: block;
  }
`

const HeaderSocialLinks = styled(SocialLinks)`
  display: none;
  @media (${breakPoints.desktop}) {
      width: 100%;
      display: flex;
      justify-content: space-between;
  }
`

const HeaderLink = styled(CustomLink)`
  background: none;
  transition: color .3s;
  &:hover {
    color: ${colors.red}
  }
`

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }))
  }

  render() {
    const {siteTitle, className} = this.props
    const isOpen = this.state.checked

    return (
      <>
        <HeaderWrapper className={className}>
          <Logo 
            onClickHandler={this.toggle}
            siteTitle={siteTitle}
            isOpen={isOpen}
          />
          <HeaderNavigation>
            <ul>
              <ListItem>
                <HeaderLink 
                  to="/skills"
                  type={'none'}
                  color={colors.white}
                >
                  Skills &amp; Experience
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink 
                  to="/projects"
                  type={'none'}
                  color={colors.white}
                >
                  Projects
                </HeaderLink>
              </ListItem> 
              <ListItem>
                <HeaderLink
                  to="/about"
                  type={'none'}
                  color={colors.white}
                >
                  About
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink
                  to="/contact"
                  type={'none'}
                  color={colors.white}
                >
                  Contact
                </HeaderLink>
              </ListItem>           
            </ul>
          </HeaderNavigation>
          <HeaderSocialLinks />
          <Hamburger isOpen={isOpen} onClickHandler={this.toggle}/>
        </HeaderWrapper>
        <ModelMenu isOpen={isOpen} onClickHandler={this.toggle}/>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
