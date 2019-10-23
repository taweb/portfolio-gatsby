import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <>
      <SEO title='Home' keywords={[`Tim Atherton`, `Portfolio`, `Web Developer`]} />
      <Hero/>
    </>
  )
}

export default IndexPage
