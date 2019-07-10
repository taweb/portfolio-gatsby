import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import PageContent from '../components/pageContent'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact Page" />
            <PageContent>
                <p>Contact page</p>
            </PageContent>
        </Layout>
      );
}
 
export default ContactPage;