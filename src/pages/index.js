import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <SEO title="Tim Atherton" keywords={[`Tim Atherton`, `Portfolio`, `Web Developer`]} />
    </Layout>
  )
}

export default IndexPage
