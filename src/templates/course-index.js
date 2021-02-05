import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import UnitList from '../components/unit-list';

const Course = ({ data: { mdx } }) => {
  const { title, description, wip } = mdx.frontmatter;
  const wipNote = (
    <p className="italic text-indigo-500">
      An diesem Kurs wird noch gearbeitet
    </p>
  );
  return (
    <Layout>
      <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
        <h1>{title}</h1>
        <h2>{description}</h2>
        {wip && wipNote}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <UnitList path={mdx.fields.filePath} showStartButton={!wip} />
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
        wip
      }
      fields {
        slug
        filePath
      }
      body
    }
  }
`;
