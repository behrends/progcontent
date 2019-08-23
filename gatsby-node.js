const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` });
    // remove digits and dash at start of slug, e.g. /08-foo/ becomes /foo/
    slug = slug.replace(/\d+-/, '');
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: fileAbsolutePath, order: ASC }) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  function getNextAndPrevNodes(idx, docs) {
    const nextNode = idx === docs.length - 1 ? null : docs[idx + 1].node;
    const prevNode = idx === 0 ? null : docs[idx - 1].node;
    const next = nextNode && {
      title: nextNode.frontmatter.title,
      link: nextNode.fields.slug
    };
    const prev = prevNode && {
      title: prevNode.frontmatter.title,
      link: prevNode.fields.slug
    };
    return { next, prev };
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }, idx, docs) => {
    const nextAndPrev = getNextAndPrevNodes(idx, docs);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/markdown-unit.js`),
      context: {
        // Passed as props to the component as this.props.pageContext
        // as well as to the GraphQL page query as graphql arguments
        slug: node.fields.slug,
        ...nextAndPrev
      }
    });
  });
};
