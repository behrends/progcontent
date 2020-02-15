import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import PrevAndNext from '../components/prev-and-next';

export const ArticleTemplate = ({ content, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRenderer>{content}</MDXRenderer>
    </div>
  );
};

export default ({
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
      />
      <PrevAndNext prev={prev} next={next} />
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
