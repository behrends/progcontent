import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PrevAndNext from '../components/prev-and-next';

export default ({ data, pageContext: { next, prev } }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PrevAndNext prev={prev} next={next} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
