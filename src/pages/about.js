import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import PageContent from '../components/pageContent'
import About from '../components/about'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <PageContent>
                <About/>
            </PageContent>
        </Layout>
      );
}
 
export default AboutPage;