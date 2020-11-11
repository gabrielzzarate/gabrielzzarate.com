import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import ArticleList from '../components/ArticleList';
import FeaturedPost from '../components/FeaturedPost';
import { Link , graphql } from 'gatsby';


export default function HomePage({ data }) {
  useEffect(() => {
    const heading = document.getElementsByClassName('section-head');
    const aboutLine = document.getElementsByClassName('section-line');
    
    if (heading && heading.length && aboutLine && aboutLine.length) {
      // animate.animateHome(heading, aboutLine);
    }
  }, []);

  const featuredPost = data?.featured?.edges?.[0].node;
  return (
    <PageWrapper>
      <div className="home view">
        <section className="standard-section-padding home-section">
          <div className="container center-text">
            {/* <CSSTransition
              classNames="fade"
              timeout={200}
            > */}
              <>
                <Heading>Featured Post</Heading>
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
              </>
            {/* </CSSTransition> */}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

// export const pageQuery = graphql`
//   query home($featuredPost: Int! = 1) {
//     allMdx(
//       filter: { frontmatter: { id: { eq: $featuredPost }}}
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           excerpt
//           slug
//           frontmatter {
//             title
//             date
//             category
//             image {
//               ...ImageFields
//             }
//           }
//         }
//       }
//     }
//   }
// `;

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