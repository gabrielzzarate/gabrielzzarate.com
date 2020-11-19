import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  if (props && props.location && props.location && props.location.pathname === '/resume') {
    return (
      <Layout noHeader {...props}>
        {element}
      </Layout>
    )
  }
	return <Layout {...props}>{element}</Layout>;
}
