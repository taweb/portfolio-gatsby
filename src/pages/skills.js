import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Skills from '../components/skills'
import PageContent from '../components/pageContent'

const SkillsPage = () => {
    return (
        <Layout>
            <SEO title="Skills and Experience" />
            <PageContent>
                <h1>Skills &amp; Experience</h1>
                <h2>Work</h2>
                <p>I'm a Bristol based developer at Flexidb / Mind Doodle.</p>
                <Skills />
            </PageContent>
        </Layout>
    );
}
 
export default SkillsPage;