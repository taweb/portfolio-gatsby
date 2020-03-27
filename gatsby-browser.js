import React from 'react';
import Layout from './src/components/layout';
import { isHomepage, getPage } from './src/utilities';

export const wrapPageElement = ({ element, props }) => {
  if (!isHomepage(getPage(props.uri))) {
    console.log(getPage(props.uri))
    document.documentElement.style.setProperty('--currentColor', `var(--${getPage(props.uri)})`)
  }
  return <Layout {...props}>{element}</Layout>
};