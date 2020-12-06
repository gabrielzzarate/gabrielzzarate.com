import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import YouTube from 'react-youtube';
import SEO from '../components/SEO';
import Img from '../components/Img';
import { FaFacebookF, FaTwitter, } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Share from '../components/Share';
import share from '../utils/share';


const PostHeaderStyles = styled.div`
  padding: 40px 0 0 0;
`;

const PostBody = styled.article`
  padding: 0 0 30px 0;
  margin: 0 auto;
`;
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        slug
        title
        date(formatString: "DD MMMM YYYY")
        category
         image {
          ...ImageFields
        }
      }
      body
    }
  }
`;

function PostTemplate({ data: { mdx: post }, scope, pageContext }) {

  if (!post) {
    return <p>No Post Found? This should be a 404</p>;
  }

    return (
    <section>
      <SEO title={post.frontmatter.title} image={post?.frontmatter?.image?.childImageSharp?.fluid?.src && `https://www.gabrielzzarate.com/${post?.frontmatter?.image?.childImageSharp?.fluid?.src}`} description={post.excerpt} />
      <div className="postImage">
        <Img image={post.frontmatter.image} alt={post.frontmatter.title} />
      </div>
      <PostHeaderStyles>
        {/* <PostMetaTags post={post} /> */}
        <h1>{post.frontmatter.title}</h1>
        <div className="postMeta metadata">
          {' '} By Gabriel Zarate in <Link className="underline" to={`/blog/${post.frontmatter.category.toString().toLowerCase()}`}>{post.frontmatter.category.join(', ')}</Link>
          <div>
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          </div>
        </div>
      </PostHeaderStyles>
      <PostBody>
        <MDXRenderer
          scope={{
            YouTube,
            ...scope,
          }}
          >
          {post.body}
        </MDXRenderer>
      </PostBody>
      <Share> 
        <a onClick={() => {
          const link = `https://www.facebook.com/sharer/sharer.php?u=`;
          return share(window.location.href, link, 'Facebook', post.frontmatter.title);
        }} target="_blank" rel="noreferrer"><FaFacebookF /></a>
    
        <a onClick={() => {
          const link = `https://twitter.com/intent/tweet/?${post && post.frontmatter ? `text=${post.frontmatter.title}&` : ''}url=`;

          return share('', link, 'Twitter', post.frontmatter.title);
        }} target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a onClick={() => {
          window.location.href = `mailto:?subject=${post && post.frontmatter ? `Check out ${post.frontmatter.title}` : 'Checkout this article from gabrielzzarate.com!'}&body=${window.location.href}`;
        }}><FiMail /></a> 
      </Share>
    </section>
  );
}

export default PostTemplate;
