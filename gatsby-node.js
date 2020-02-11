const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({
      node,
      getNode,
      basePath: `courses`
    });
    // remove digits and dash at start of slug, e.g. /08-foo/ becomes /foo/
    const slug = filePath.replace(/\d+-/g, '');
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    createNodeField({
      node,
      name: `filePath`,
      value: filePath
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx(sort: { fields: fileAbsolutePath, order: ASC }) {
        edges {
          node {
            frontmatter {
              templateKey
              title
            }
            fields {
              slug
              filePath
            }
          }
        }
      }
    }
  `);

  function getNextAndPrevNodes(node, idx, docs) {
    const nextNode =
      idx === docs.length - 1 ? null : docs[idx + 1].node;
    const prevNode = idx === 0 ? null : docs[idx - 1].node;
    // only add prev and next node to nodes with same template (in same course)
    let next = null,
      prev = null;
    if (
      nextNode &&
      nextNode.frontmatter.templateKey ===
        node.frontmatter.templateKey
    ) {
      next = {
        title: nextNode.frontmatter.title,
        link: nextNode.fields.slug
      };
    }
    if (
      prevNode &&
      prevNode.frontmatter.templateKey ===
        node.frontmatter.templateKey
    ) {
      prev = {
        title: prevNode.frontmatter.title,
        link: prevNode.fields.slug
      };
    }
    return { next, prev };
  }

  result.data.allMdx.edges.forEach(({ node }, idx, docs) => {
    const nextAndPrev = getNextAndPrevNodes(node, idx, docs);
    const courseIndex = node.fields.slug.replace(
      /(\/.*\/)(.*\/)/,
      '$1'
    );
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        // Passed as props to the component as this.props.pageContext
        // as well as to the GraphQL page query as graphql arguments
        slug: node.fields.slug,
        courseIndex: courseIndex,
        ...nextAndPrev
      }
    });
  });
};
