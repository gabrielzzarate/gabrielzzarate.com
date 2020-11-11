import React from 'react';
import { Link, graphql } from 'gatsby';
import ArticleList from '../../components/ArticleList';

const Blog = function ({ data, pageContext, path, location }, ...props) {
  if (!data) return <p>Shooooot! No Post found!</p>;
  return (
    <>
      {/* <Pagination
        currentPage={pageContext.currentPage}
        totalCount={data.allMdx.totalCount}
        pathPrefix="/blog/"
      />
      <PostMetaTags
        post={{
          frontmatter: {
            slug: path,
            title: `Blog ${
              pageContext.currentPage ? `- Page ${pageContext.currentPage}` : ''
            }`,
          },
        }}
      /> */}
      <ArticleList heading={pageContext.category ? pageContext.category : 'All Articles'}>
        {data.allMdx &&
          data.allMdx.edges.map(function ({ node: post }) {
            return (
              <li key={post.id}>
                <Link to={`/blog/${post.frontmatter.slug}`} className="article-link">
                  <time className="postDate metadata" 
                  dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                  <h2>
                    {post.frontmatter.title}
                  </h2>
                  <p>{post.excerpt}</p>
                </Link>
              </li>
            );
          })}
      </ArticleList>
      {/* <Pagination
        currentPage={pageContext.currentPage}
        totalCount={data.allMdx.totalCount}
        pathPrefix="/blog/"
      /> */}
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query blogPosts($category: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      limit: 10
      filter: { frontmatter: { category: { eq: $category }}}
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "DD MMMM YYYY")
            category
          }
        }
      }
    }
  }
`;