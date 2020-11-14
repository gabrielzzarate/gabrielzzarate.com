import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/SEO';
// import YouTube from 'react-youtube';
// import { Helmet } from 'react-helmet';
// import { IoLogoGithub } from 'react-icons/io';
import Img from '../components/Img';
// import Img from '../components/Img';
// import H from '../components/mdxComponents/Headings';
// import ContentNav from '../components/ContentNav';
// import PostHeaderStyles from '../components/styles/PostHeaderStyles';
// import EditDialogStyles from '../components/styles/EditDialogStyles';
// import { PostMetaTags } from '../components/MetaTags';

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
        date(formatString: "DD MMMM, YYYY")
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
      <SEO title={post.frontmatter.title} image={post?.frontmatter?.image?.asset?.fluid?.src} />
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
          {/* <a rel="noopener noreferrer" target="_blank" href={editURL}>
            Edit Post <IoLogoGithub />
          </a> */}
        </div>
      </PostHeaderStyles>
      <PostBody>
        <MDXRenderer
          scope={{
            ...scope,
          }}
          >
          {post.body}
        </MDXRenderer>
      </PostBody>
      {/* <EditDialogStyles>
        <p>
          Find an issue with this post? Think you could clarify, update or add
          something?
        </p>
        <p>
          All my posts are available to edit on Github. Any fix, little or
          small, is appreciated!
        </p>
        <p>
          <a rel="noopener noreferrer" target="_blank" href={editURL}>
            <IoLogoGithub /> Edit on Github
          </a>
        </p>
      </EditDialogStyles> */}
      {/* <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      /> */}
    </section>
  );
}

export default PostTemplate;
