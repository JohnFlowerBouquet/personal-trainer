import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box, Button } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';

const Container = styled(Box)`
  border: #ebebeb 1px solid;
  border-radius: 30px;
  flex: 1 1 300px;
  max-width: 300px;
`;

const Para = styled.p`
  border-top: #ebebeb 1px solid;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  line-height: 1;
  color: #726a84;
`;

const PriceHeader = styled(Box)`
  border-radius: 30px 30px 0 0;
  text-align: center;
  :hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const PriceCard = ({ name, price, points }) => (
  <Flex flexDirection="column" alignItems="center">
    <PriceHeader
      color="white"
      py={5}
      bg="primary"
      width={1}
      styles={{ borderRadius: '30px 30px 0 0' }}
    >
      <Text fontSize={[4, 4, 4]}>{name}</Text>
      <Text fontSize={[4, 4, 6]}>${price}</Text>
    </PriceHeader>
    {points.map(point => (
      <Para>{point}</Para>
    ))}
  </Flex>
);

const Pricing = () => (
  <Section.Container id="pricing">
    <Section.Header name="Pricing" />
    <StaticQuery
      query={graphql`
        query PriceQuery {
          allContentfulPrice(
            sort: { fields: [price], order: ASC }
            filter: { node_locale: { eq: "en-US" } }
          ) {
            edges {
              node {
                name
                price
                points
              }
            }
          }
        }
      `}
      render={({ allContentfulPrice }) => (
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          {allContentfulPrice.edges.map((p, i) => (
            <Container mb={4}>
              <Fade bottom delay={i * 200}>
                <PriceCard key={p.node.id} {...p.node} />
              </Fade>
            </Container>
          ))}
        </Flex>
      )}
    />
  </Section.Container>
);

export default Pricing;
