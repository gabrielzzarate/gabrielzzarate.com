import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from '../Img';

const StyledFeaturedPost = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  gap: 30px;


  .col {
    width: 50%;
  }

  .readMore {
    display: flex;
    padding-top: 10px;
    justify-content: flex-start;
  }
  
  @media screen and (max-width: 700px) {
    flex-direction: column;

    .col {
      width: 100%;
    }
  }
`;


export default function FeaturedPost({ post }) {

  return (
    <StyledFeaturedPost>
      <div className="col">
        <Img image={post.frontmatter.image} alt={post.frontmatter.title} />
      </div>
      <div className="col">
        <h2>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>

        <div class="readMore">
          <Link to={`/blog/${post.frontmatter.slug}`}>Read More</Link>
        </div>
      </div>
    </StyledFeaturedPost>
  )
}