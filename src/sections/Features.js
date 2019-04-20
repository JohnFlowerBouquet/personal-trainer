import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  text-align: center;
`;

const FunCard = ({ title, description, image }) => (
  <Card p={4} borderRadius={8}>
    <Flex flexDirection="column" alignItems="center">
      <Image
        width={[1, 1, 1 / 2]}
        src={`${image.image.src}`}
        borderRadius={8}
      />
      <Title my={2} pb={1}>
        {title}
      </Title>
      <Text width={[1]} style={{ overflow: 'auto' }}>
        {description}
      </Text>
    </Flex>
  </Card>
);

FunCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

const Features = () => (
  <Section.Container id="features">
    <StaticQuery
      query={graphql`
        query CardsQuery {
          allContentfulCard(filter: { node_locale: { eq: "en-US" } }) {
            edges {
              node {
                title
                description
                image {
                  image: resize(width: 200, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulCard }) => {
        return (
          <Fragment>
            <Section.Header name="Features" />
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <CardContainer minWidth="250px">
                    {allContentfulCard.edges.map((p, i) => (
                      <Fade bottom delay={i * 200}>
                        <FunCard key={p.node.id} {...p.node} />
                      </Fade>
                    ))}
                  </CardContainer>
                </Fade>
              </Box>
            </Flex>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default Features;
