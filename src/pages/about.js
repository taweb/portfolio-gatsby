import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import PageContent from '../components/pageContent'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Page" />
            <PageContent>
                <p>About page</p>
            </PageContent>
        </Layout>
      );
}
 
export default AboutPage;