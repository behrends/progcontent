import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default ({ path, showStartButton }) => {
  const coursePath = '/src/courses' + path;
  const data = useStaticQuery(graphql`
    query {
      allMdx(
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

  const edges = data.allMdx.edges.filter(
    ({ node }) => node.fileAbsolutePath.indexOf(coursePath) !== -1
  );
  if (edges.length === 0) return null;

  const startCourse = (
    <Link
      to={edges[0].node.fields.slug}
      className="float-right rounded-xl p-2 bg-purple-600 hover:bg-purple-800"
      style={{ color: '#FFF', textDecoration: 'none' }}
    >
      Kurs starten
    </Link>
  );

  return (
    <>
      {showStartButton && startCourse}
      <h3>Inhalt</h3>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
