import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{' '}
              <span>&mdash; {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: fileAbsolutePath, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD. MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
