import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <>
      <Hero/>
      <SEO title="Home" keywords={[`Tim Atherton`, `Portfolio`, `Web Developer`]} />
    </>
  )
}

export default IndexPage
