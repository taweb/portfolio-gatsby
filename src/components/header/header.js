import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {colors, breakPoints, layout, fontSizes} from '../../theme/Variables';
import Hamburger from './hamburger';
import Logo from '../logo';
import CustomLink from '../link';
import SocialLinks from '../socialLinks';

const HeaderWrapper = styled.header`
  /* padding: 10px 15px; */
  padding: 1rem;
  position: fixed;
  top: 0;
  height: ${layout.headerHeight};
  width: 100%;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.grey};
  transition: background-color 0.5s ease;
  @media (${breakPoints.desktop}) {
      flex-direction: column;
      padding: 1rem;
      text-align: center;
  }
`

const ModelMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  @media (${breakPoints.desktop}) {
    display: none;
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

const StyledSocialLinks = styled(SocialLinks)`
  display: none;
  @media (${breakPoints.desktop}) {
      display: flex;
  }
`

const activeStyle = {
  'fontWeight': 'bold',
  'textTransform': 'uppercase'
}

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
                <CustomLink 
                  to="/skills"
                  activeStyle={activeStyle}
                  type={'normal'}
                  highlight={colors.red}
                >
                  Skills &amp; Experience
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink 
                  to="/projects"
                  activeStyle={activeStyle}
                  type={'normal'}
                  highlight={colors.red}
                >
                  Projects
                </CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink
                  to="/about"
                  activeStyle={activeStyle}
                  type={'normal'}
                  highlight={colors.red}
                >
                  About
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink
                  to="/contact"
                  activeStyle={activeStyle}
                  type={'normal'}
                  highlight={colors.red}
                >
                  Contact
                </CustomLink>
              </ListItem>           
            </ul>
          </HeaderNavigation>
          <StyledSocialLinks />
          <Hamburger isOpen={isOpen} onClickHandler={this.toggle}/>
        </HeaderWrapper>
        <ModelMenu isOpen={isOpen}>
          <nav>
            <ul>
              <ListItem>
                <CustomLink 
                  to="/skills"
                  color={colors.white}
                  activeStyle={activeStyle}
                  type={'none'}
                  onClick={this.toggle}
                >
                  Skills
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink 
                  to="/projects"
                  color={colors.white}
                  activeStyle={activeStyle}
                  type={'none'}
                  onClick={this.toggle}
                >
                  Projects
                </CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink
                  to="/about"
                  color={colors.white}
                  activeStyle={activeStyle}
                  type={'none'}
                  onClick={this.toggle}
                >
                  About
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink
                  to="/contact"
                  color={colors.white}
                  activeStyle={activeStyle}
                  type={'none'}
                  onClick={this.toggle}
                >
                  Contact
                </CustomLink>
              </ListItem>           
            </ul>
          </nav>
        </ModelMenu>
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
