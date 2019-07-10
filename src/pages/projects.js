import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContent from '../components/pageContent'

const ProjectsPage = () => {
    return (
        <Layout>
            <SEO title="Projects Page" />
            <PageContent>
                <h1>Hi from the projects page</h1>
            </PageContent>
        </Layout>
    );
}
 
export default ProjectsPage;