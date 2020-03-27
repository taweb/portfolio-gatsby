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
  padding: 1rem 1.5rem;
  position: fixed;
  top: 0;
  height: ${layout.headerHeight};
  width: 100%;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryBlue};
  @media (${breakPoints.desktop}) {
      flex-direction: column;
      padding: 2rem 1.5rem;
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

const NavList = styled.ul`
  margin: 0;
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
  display: inline-block;
  width: 100%;
  background: none;
  transition: color .3s;
  &:hover {
    color: ${({to}) => `var(--${to.substr(1)})`};
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
    const {siteTitle, className, path} = this.props
    const isOpen = this.state.checked
    const linkColor = path === '/' ? colors.black : colors.white    

    return (
      <>
        <HeaderWrapper className={className}>
          <Logo 
            onClickHandler={this.toggle}
            siteTitle={siteTitle}
            isOpen={isOpen}
          />
          <HeaderNavigation>
            <NavList>
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
            </NavList>
          </HeaderNavigation>
          <HeaderSocialLinks color={linkColor} />
          <Hamburger isOpen={isOpen} onClickHandler={this.toggle}/>
        </HeaderWrapper>
        <ModelMenu isOpen={isOpen} onClickHandler={this.toggle} color={colors.white}/>
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
