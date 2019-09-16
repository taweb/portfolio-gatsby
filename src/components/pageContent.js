import React from 'react';
import styled from 'styled-components';
import {breakPoints} from '../theme/Variables';

const PageContentWrapper = styled.div`
    padding: 1rem 2rem;
    @media(${breakPoints.desktop}) {
        padding: 1rem 3rem;
    }
    @media(${breakPoints.xldesktop}) {
        padding: 1rem 10rem;
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