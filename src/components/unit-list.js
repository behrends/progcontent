import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default ({ path }) => {
  const coursePath = '/src/pages' + path;
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "markdown-unit" } } }
        sort: { fields: fileAbsolutePath, order: ASC }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  // TODO: check for feature to pass variables to static query
  // will this approach create bigger JS-builds delivered to browser?
  // https://github.com/gatsbyjs/gatsby/issues/10482
  return (
    <ul>
      {data.allMarkdownRemark.edges
        .filter(
          ({ node }) => node.fileAbsolutePath.indexOf(coursePath) !== -1
        )
        .map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
    </ul>
  );
};
