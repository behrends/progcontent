import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Idx = ({ data }) => {
  return (
    <Layout>
      <div class="flex flex-wrap">
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id} class="max-w-md mr-4 mb-4 p-2 bg-white rounded-xl shadow-md hover:bg-indigo-100 transform hover:scale-105">
          <Link to={node.fields.slug} class="no-underline">
            <h2 class="text-2xl">{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
          </Link>
        </div>
      ))}
      </div>
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
