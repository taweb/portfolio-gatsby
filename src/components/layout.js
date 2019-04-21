import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../theme/GlobalStyle';
import Header from './header';
import Footer from './footer';

const Layout = ({children, headerContent}) => {
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
        {headerContent}
        <main>
          {children}
        </main>
        <Footer/>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.element
}

export default Layout
