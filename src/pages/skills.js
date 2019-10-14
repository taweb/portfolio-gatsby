import React from 'react';
import SEO from '../components/seo';
import Skills from '../components/skills';
import PageContent from '../components/pageContent';
import Work from '../components/work';
import { GlobalStyle } from '../theme/GlobalStyle';

const SkillsPage = ({data}) => {    
    const workData = data.allMarkdownRemark.nodes[0]
    return (
        <>
            <GlobalStyle />
            <SEO title="Skills and Experience" />
            <PageContent>
                <h1>Skills &amp; Experience</h1>
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