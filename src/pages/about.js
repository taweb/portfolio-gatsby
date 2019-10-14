import React from 'react';
import SEO from "../components/seo"
import PageContent from '../components/pageContent'
import About from '../components/about'
import { GlobalStyle } from '../theme/GlobalStyle';

const AboutPage = () => {
    return (
        <>  
            <GlobalStyle />
            <SEO title="About" />
            <PageContent>
                <About/>
            </PageContent>
        </>
      );
}
 
export default AboutPage;