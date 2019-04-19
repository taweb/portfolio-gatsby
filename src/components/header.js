import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import {colors} from '../theme/Variables'

const HeaderWrapper = styled.header`
  padding: 0.5em;
  background: green;
  color: ${colors.white};
`
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`
const MainLink = styled.h1`
  font-size: 1.5rem;
  font-weight: 700  ;
  color: ${colors.white};
`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ListItem = styled.li`
  font-weight: 400;
  font-size: 1.5rem;
  :after {
    content: '|';
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
  :link,
  :visited,
  :active {
    color: ${colors.white};
  }
  :hover {
    color: lighten(${colors.white});
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Navigation>
      <MainLink>
        <StyledLink
          to="/"
        >
          {siteTitle}
        </StyledLink>
      </MainLink>
      <List>
        <ListItem>something</ListItem>
        <ListItem>something else</ListItem>
        <ListItem>something else</ListItem>
      </List>
    </Navigation>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
