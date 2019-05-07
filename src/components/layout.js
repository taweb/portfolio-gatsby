import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../theme/GlobalStyle';
import Header from './header/header';
import Footer from './footer';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 60px;
`

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          {children}
        </Main>
        <Footer/>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.element
}

export default Layout
