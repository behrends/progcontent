import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import UnitList from '../components/unit-list';

const Course = ({ data: { mdx } }) => {
  const { title, description, image, wip } = mdx.frontmatter;
  const wipNote = (
    <p className="italic text-indigo-500">
      An diesem Kurs wird noch gearbeitet
    </p>
  );
  return (
    <Layout>
      <Img
        fixed={image.childImageSharp.fixed}
        className="float-none md:float-right"
      />
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
        image {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
