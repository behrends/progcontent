import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import CourseCard from '../components/CourseCard';

const Idx = ({ data }) => {
  return (
    <Layout>
      <div className="grid grid-flow-row grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.allMdx.edges.map(({ node }) => (
          <CourseCard
            id={node.id}
            link={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            image={node.frontmatter.image}
            wip={node.frontmatter.wip}
          />
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
            wip
            image {
              childImageSharp {
                fluid(maxHeight: 100, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
