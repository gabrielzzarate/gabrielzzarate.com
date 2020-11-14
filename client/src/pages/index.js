import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ArticleList from '../components/ArticleList';
import FeaturedPost from '../components/FeaturedPost';
import SEO from '../components/SEO';
import { Link, graphql } from 'gatsby';

export default function HomePage({ data }) {
  const featuredPost = data?.featured?.edges?.[0].node;
  return (
    <PageWrapper>
      <div className="home view">
      <SEO title="Home" />
        <section className="standard-section-padding home-section">
          <div className="container center-text">
            <FeaturedPost post={featuredPost} />
            <ArticleList heading="Recent Articles">
              {data.allMdx && data.allMdx.edges.map(function ({ node: post }) {
                if (post.frontmatter.id === featuredPost.frontmatter.id) {
                  return null;
                }
                return (
                  <li key={post.id}>
                    <Link to={`/blog/${post.frontmatter.slug}`} className="article-link">
                      <h2>
                        {post.frontmatter.title}
                      </h2>
                      <p>{post.excerpt}</p>
                    </Link>
                  </li>
                );
              })}
            </ArticleList>
            <a className="cta-link" href="https://tinyletter.com/gabrielzzarate" target="_blank" rel="noreferrer">
              <h2>
              Sign up for <a className="underline">The Newsletter</a>
						  </h2>
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

export const pageQuery = graphql`
  query home {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            id
            slug
            title
            date
            category
            image {
              ...ImageFields
            }
          }
        }
      }
    }
    featured: allMdx(
      filter: { frontmatter: { id: { eq: 1 }}} 
    ) {
      totalCount
        edges {
          node {
            id
            excerpt
            frontmatter {
              id
              slug
              title
              date
              category
              image {
                ...ImageFields
              }
            }
          }
        }
    }
  }
`;