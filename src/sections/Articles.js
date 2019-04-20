import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Box } from 'rebass';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';

const Post = ({ title, slug, image, tags, date }) => (
  <Card pb={4} style={{ minWidth: '300px' }} borderRadius={8}>
    <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
      <Img
        alt={title}
        fluid={image}
        borderRadius={8}
        style={{ height: '200px' }}
      />
      <Box bg="primaryLight" color="white" p={1}>
        {date}
      </Box>
      <Heading m={3} p={1}>
        {title}
      </Heading>
      <Text m={3}>{tags.join(' ')}</Text>
    </Link>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

const parsePost = postFromGraphql => {
  const { publishDate, title, tags, heroImage, slug } = postFromGraphql;
  const image = heroImage.fluid;
  return {
    title,
    date: publishDate,
    tags,
    image,
    slug,
  };
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Articles = () => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allContentfulBlogPost(
          sort: { fields: [publishDate], order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMMM Do, YYYY")
              tags
              heroImage {
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulBlogPost }) => {
      const posts = edgeToArray(allContentfulBlogPost).map(parsePost);
      return (
        <Section.Container id="articles">
          <Section.Header name="Articles" />
          <CardContainer minWidth="300px">
            {posts.map(p => (
              <Fade bottom>
                <Post key={p.date} {...p} />
              </Fade>
            ))}
          </CardContainer>
        </Section.Container>
      );
    }}
  />
);

export default Articles;
