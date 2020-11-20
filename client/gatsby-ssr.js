import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  if (props && props.path && props.path === '/resume' || props.path === '/resume/') {
    console.log('props ssr', props);
    return (
      <Layout noHeader={true} {...props}>
        {element}
      </Layout>
    )
  }
	return <Layout {...props}>{element}</Layout>;
}
