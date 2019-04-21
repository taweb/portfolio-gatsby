import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {colors} from '../theme/Variables';

const HeaderWrapper = styled.header`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 1)
  };
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 4px ${colors.black}
`
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items; center;
  padding: 0.5rem;
  height: 100%;
`
  
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ListItem = styled.li`
  font-weight: 400;
  font-size: 1rem;
  :after {
    content: '/';
    margin: 0 10px;
    font-weight: 400;
  }
  :last-child {
    :after {
      content: '';
      margin: 0;
    }
  }
`
const StyledLink = styled(Link)`
  :visited,
  :active {
    color: inherit;
  }
  :hover {
    color: ${colors.grey};
  }
`

class Header extends Component {
  render() {
    const {siteTitle} = this.props

    return (
      <HeaderWrapper>
        <Navigation>
            <StyledLink
              to="/"
            >
              {siteTitle}
            </StyledLink>
          <List>
            <ListItem>
              <StyledLink to="*">Skills</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="*">Projects</StyledLink>
            </ListItem> 
            <ListItem>
              <StyledLink to="*">About</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="*">Contact</StyledLink>
            </ListItem>           
          </List>
        </Navigation>
    </HeaderWrapper>
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
