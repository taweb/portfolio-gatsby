import React from 'react'
import SEO from '../components/seo'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby';
import ProjectList from '../components/projects/projectList';

const ProjectsPage = ({data}) => (
    <>
        <SEO title='Projects' />
        <PageContent>
            <h1>Projects</h1>
            <h2>Personal Projects</h2>
            <p>Below are a selection of personal projects or tutorials which I have been working on.</p>
            <ProjectList images={data}/>
        </PageContent>
    </>
);
 
export default ProjectsPage;

export const query = graphql`
    {
        allFile(
            sort: { order: ASC, fields: [absolutePath] }
            filter: { relativePath: { regex: "/projects/.*.png/" } }
        ) 
        {
            edges {
                node {
                    relativePath,
                    name,
                    childImageSharp {
                        sizes(maxWidth: 320) {
                          ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
    
`