import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import UnitList from '../components/unit-list';

export default ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <h2>{markdownRemark.frontmatter.description}</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <UnitList path={markdownRemark.fields.slug} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
      html
    }
  }
`;
