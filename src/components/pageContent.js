import React from 'react';
import styled from 'styled-components';

const PageContentWrapper = styled.div`
    padding: 1rem;
`

const PageContent = ({children}) => {
    return ( 
        <PageContentWrapper>
            {children}
        </PageContentWrapper>
     );
}
 
export default PageContent;