import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
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

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "course-index" } } }
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
