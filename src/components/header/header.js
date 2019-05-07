import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {colors} from '../../theme/Variables';
import Hamburger from './hamburger';
import Logo from '../logo';

const HeaderWrapper = styled.header`
  padding: 10px 15px;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 101;
  box-shadow: ${(props) => props.isOpen ? 'none' : `0px 1px 2px ${colors.black}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.isOpen ? 'none' : `${colors.white}`};
  transition: background-color 0.5s ease;
`

const Navigation = styled.nav`
  a {
    transition: color 0.3s ease-out;
    :link,
    :visited,
    :focus {
      color: ${colors.white};
    }
    :hover,
    :active {
      color: ${colors.grey}
    }
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
`
  
const ListItem = styled.li`
  padding: 0.5rem;
  font-weight: 400;
  font-size: 2rem;
  color: ${colors.white};
`
const StyledLink = styled(Link)`
  :visited,
  :active {
    color: inherit;
  }
  :hover {
    color: ${colors.grey};
  }
  ::after {
    content: '//';
    margin-left: 10px;
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
    const {siteTitle} = this.props
    const isOpen = this.state.checked

    return (
      <>
        <HeaderWrapper isOpen={isOpen}>
          <Logo 
            isOpen={isOpen}
            onClickHandler={this.toggle}
            siteTitle={siteTitle}
          />
          <Hamburger isOpen={isOpen} onClickHandler={this.toggle}/>
        </HeaderWrapper>
        <ModelMenu isOpen={isOpen}>
          <Navigation>
            <ul>
              <ListItem>
                <StyledLink 
                  to="/skills"
                  onClick={this.toggle}
                >
                  Skills
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink 
                  to="/projects"
                  onClick={this.toggle}
                >
                  Projects
                </StyledLink>
              </ListItem> 
              <ListItem>
                <StyledLink
                  to="/about"
                  onClick={this.toggle}
                >
                  About
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  to="/contact"
                  onClick={this.toggle}
                >
                  Contact
                </StyledLink>
              </ListItem>           
            </ul>
          </Navigation>
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
