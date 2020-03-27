import React from 'react';
import SEO from '../components/seo';
import Skills from '../components/skills';
import PageContent from '../components/pageContent';
import Work from '../components/work';
import PageHeader from '../components/pageHeader'

const SkillsPage = ({data}) => {    
    const workData = data.allMarkdownRemark.nodes[0]
    return (
        <>
            <SEO title='Skills and Experience'/>
            <PageContent>
                <PageHeader>Skills &amp; Experience</PageHeader>
                <Work data={workData}/>
                <Skills />
            </PageContent>
        </>
    );
}
 
export default SkillsPage;

export const query = graphql`
    {
        allMarkdownRemark(
        filter: {
            frontmatter: {
                title: { eq:"Work" }
            }
        }
        ) {
            nodes {
                frontmatter {
                    title
                },
                html
            }
        }
    }
`