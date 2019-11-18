import React from 'react';
import styled from 'styled-components';
import {breakPoints} from '../theme/Variables';

const PageContentWrapper = styled.div`
    padding: 1rem 1.5rem;
    @media(${breakPoints.desktop}) {
        padding: 2rem 3rem;
    }
    @media(${breakPoints.xldesktop}) {
        padding: 2rem 10rem;
    }
`

const PageContent = ({children}) => {
    return ( 
        <PageContentWrapper>
            {children}
        </PageContentWrapper>
     );
}
 
export default PageContent;