import React from 'react';
import SEO from "../components/seo"
import PageContent from '../components/pageContent'
import About from '../components/about'

const AboutPage = () => {
    return (
        <>  
            <SEO title="About" />
            <PageContent>
                <About/>
            </PageContent>
        </>
      );
}
 
export default AboutPage;