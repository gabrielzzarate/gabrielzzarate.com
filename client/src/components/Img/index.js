import React from 'react';
import Img from 'gatsby-image';


export default function ({ image, ...props }) {
  if (!image) {
    return null;
  }
  if (image.extension === 'gif') {
    return <img src={image.publicUrl} {...props} />
  }
  return <Img fluid={image.childImageSharp.fluid} {...props} />;
}