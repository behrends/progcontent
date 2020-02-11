import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import PrevAndNext from '../components/prev-and-next';

export default ({
  data: { mdx },
  pageContext: { next, prev, courseIndex }
}) => {
  const index = <Link to={`${courseIndex}`}>Inhalt</Link>;
  return (
    <Layout indexLink={index}>
      <PrevAndNext prev={prev} next={next} />
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <PrevAndNext prev={prev} next={next} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
