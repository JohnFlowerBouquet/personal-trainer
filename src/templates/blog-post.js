import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const BlogPostTemplate = props => {
  const post = props.data.contentfulBlogPost;

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title}`} />
        <div>
          <Img alt={post.title} fluid={post.heroImage.fluid} />
        </div>
        <h1 className="section-headline">{post.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.publishDate}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
