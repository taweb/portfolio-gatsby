import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import Footer from './footer';
import styled from 'styled-components';
import {breakPoints, layout, colors} from '../theme/Variables';
import { GlobalStyle } from '../theme/GlobalStyle';

const HeaderLayout = styled(Header)`
  @media (${breakPoints.desktop}) {
      width: ${layout.sidebarWidth};
      height: 100%;
      background: ${(props) => props.path === '/' && 'none'};
  }
`

const MainLayout = styled.main`
  margin-top: ${(props) => props.path === '/' ? `0px` : `${layout.headerHeight}`};
  height: 100%;
  flex: 1;
  @media (${breakPoints.desktop}) {
      margin-top: 0px;
      margin-left: ${(props) => props.path === '/' ? `0px` : `${layout.sidebarWidth}`};
  }
`

const FooterLayout = styled(Footer)`
  position: ${(props) => props.path === '/' && 'fixed'};
  bottom: ${(props) => props.path === '/' && '0px'};
  width: 100%;
  color: ${(props) => props.path === '/' && `${colors.white}`};
  @media (${breakPoints.desktop}) {
    margin-left: ${layout.sidebarWidth};
    position: static;
    width: auto;
    color: ${colors.black};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({children, location}) => {
  
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
        <Wrapper>
          <HeaderLayout 
            siteTitle={data.site.siteMetadata.title}
            path={location.pathname}
          />
          <MainLayout path={location.pathname}>
            {children}
          </MainLayout>
          <FooterLayout path={location.pathname}/>
        </Wrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.element
}

export default Layout
