import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PrevAndNext from '../components/prev-and-next';

export default ({
  data: { markdownRemark },
  pageContext: { next, prev }
}) => {
  return (
    <Layout>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
      }
    }
  }
`;
