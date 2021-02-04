import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import UnitList from '../components/unit-list';

const Course = ({ data: { mdx } }) => {
  return (
    <Layout>
      <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.description}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <UnitList path={mdx.fields.filePath} />
      </div>
    </Layout>
  );
};
export default Course;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      fields {
        slug
        filePath
      }
      body
    }
  }
`;
