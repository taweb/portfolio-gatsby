import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import Footer from './footer';
import styled from 'styled-components';
import {breakPoints, layout} from '../theme/Variables';

const HeaderLayout = styled(Header)`
  @media (${breakPoints.desktop}) {
      width: ${layout.sidebarWidth};
      height: 100%;
  }
`

const MainLayout = styled.main`
  margin-top: ${layout.headerHeight};
  height: 100%;
  flex: 1;
  @media (${breakPoints.desktop}) {
      margin-top: 0px;
      margin-left: ${layout.sidebarWidth};
  }
`

const FooterLayout = styled(Footer)`
  @media (${breakPoints.desktop}) {
    margin-left: ${layout.sidebarWidth};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
        <Wrapper>
          <HeaderLayout siteTitle={data.site.siteMetadata.title} />
          <MainLayout>
            {children}
          </MainLayout>
          <FooterLayout/>
        </Wrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.element
}

export default Layout
