import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Skills from '../components/skills'

const SkillsPage = () => {
    return (
        <Layout>
            <SEO title="Skills Page" />
            <h1>Hi from the skills page</h1>
            <Skills />
        </Layout>
    );
}
 
export default SkillsPage;