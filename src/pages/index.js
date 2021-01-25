import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Idx = ({ data }) => {
  return (
    <Layout>
      <h1>Kursübersicht</h1>
      <p>
        Hier gibt's Kurse zu den Themen Programmierung, Webanwendungen
        (Frontend-Technologien) und mobiler App-Entwicklung. Die
        Inhalte werden zur Zeit fortlaufend ergänzt.
      </p>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
          </Link>
        </div>
      ))}
    </Layout>
  );
};
export default Idx;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "course-index" } } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
