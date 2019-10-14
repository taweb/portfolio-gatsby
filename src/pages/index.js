import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { GlobalStyle } from '../theme/GlobalStyle';

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Hero/>
      <SEO title="Home" keywords={[`Tim Atherton`, `Portfolio`, `Web Developer`]} />
    </>
  )
}

export default IndexPage
