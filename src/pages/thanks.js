import React from 'react';
import PageContent from '../components/pageContent';
import CustomLink from '../components/link';

const Thanks = () => (
    <PageContent>
      <h1>Thank you!</h1>
      <p>Your form submission has been received.</p>
      <p><CustomLink to="/">Return to Home</CustomLink></p>
    </PageContent>
  );
 
export default Thanks;