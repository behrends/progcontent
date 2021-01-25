import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import PrevAndNext from '../components/prev-and-next';
import ArticleTemplate from '../components/article-template';

const Unit = ({
  data: { mdx },
  pageContext: { next, prev, courseIndex }
}) => {
  const index = <Link to={`${courseIndex}`}>Inhaltsverzeichnis</Link>;
  return (
    <Layout indexLink={index}>
      <PrevAndNext prev={prev} next={next} />
      <ArticleTemplate
        title={mdx.frontmatter.title}
        content={mdx.body}
        contentComponent={MDXRenderer}
      />
      <PrevAndNext prev={prev} next={next} />
    </Layout>
  );
};
export default Unit;

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
