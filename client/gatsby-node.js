require('dotenv').config();
const path = require('path');

async function makePostsFromMdx({ graphql, actions }) {
  const blogPost = path.resolve('./src/templates/post.js');
  const { errors, data } = await graphql(
    `
    {
      allMdx {
        edges {
          node {
            body
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
    `
  );

  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const posts = data.allMdx.edges;

  posts.forEach((post, i) => {
    actions.createPage({
      path: `/blog/${post.node.frontmatter.slug}`,
      component: blogPost,
      context: {
        slug: post.node.frontmatter.slug,
        collection: 'post',
        pathPrefix: '',
      },
    });
  })
}

async function filterPosts({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) {
  // todo: fetch all categories
  // create a page for each category
  // pass in category in context for querying
  const { errors, data } = await graphql(
    `
      {
        allMdx {
          totalCount
          edges {
            node {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const { edges } = data.allMdx;

  const allCategories = edges.map((node, i) => {
    return node.node.frontmatter.category;
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const arrays = allCategories.filter(onlyUnique);

  const categories = [].concat.apply([], arrays);

  categories.map((category, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `/blog/${category.toLowerCase()}`,
      component,
      context: {
        category,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    makePostsFromMdx({ graphql, actions }),
    filterPosts({
      graphql,
      actions,
      collection: 'posts',
      pathPrefix: '/blog',
      component: path.resolve('./src/pages/blog/index.js'),
    }),
  ]);
};