import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Skills from '../components/skills'

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <SEO title="Tim Atherton" keywords={[`Tim Atherton`, `Portfolio`, `Web Developer`]} />
      <Skills />
    </Layout>
  )
}

export default IndexPage
