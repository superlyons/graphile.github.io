const path = require("path");

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pageTemplate = path.resolve(`src/templates/page.js`);

  const result = await graphql(`{
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              path
              title
            }
          }
        }
      }
    }`);
  if (result.errors) {
    const error = new Error("GraphQL query failed");
    error.errors = result.errors;
    throw error;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.dir(node);
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};