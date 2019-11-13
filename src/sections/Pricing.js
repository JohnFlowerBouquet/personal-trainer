import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box, Button } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {
  SectionWithBackground,
  SectionContainer,
  Header,
} from '../components/Section';

const Container = styled(Box)`
  text-align: center;
  padding: 2em 2em 3em;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;

  ${props => props.theme.mediaQueries.medium} {
    flex: 1 1 250px;
    max-width: 300px;
    padding: 40px 0px;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: -25px;
  padding: 1rem 1.5rem;
  letter-spacing: 1px;
  background-color: #d291bc;
  border-radius: 3px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

const PriceCard = ({ sum, name, price, value, howMany }) => (
  <div style={{ overflow: 'hidden' }}>
    <Fade bottom delay={200}>
      <Flex flexDirection="column" alignItems="center">
        <Text mb={[3, 3, 3]} fontSize={[4, 4, 4]}>
          {name}
        </Text>
        <Text my={[1, 2, 4]} fontSize={[3, 4, 6]} color="#d291bc">
          {price}
        </Text>
        <Text my={[1, 2, 2]} fontSize={[3, 4, 3]}>
          {value}
        </Text>
        <Text my={[1, 2, 4]} fontSize={[3, 4, 2]}>
          {sum}
        </Text>
        <Text my={[1, 2, 4]} fontSize={[3, 2, 3]}>
          {howMany}
        </Text>
      </Flex>
    </Fade>
  </div>
);

PriceCard.propTypes = {
  sum: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  howMany: PropTypes.string.isRequired,
};

const Pricing = () => (
  <StaticQuery
    query={graphql`
      query PriceQuery {
        contentfulSiteSection3 {
          title
          content {
            prices {
              sum
              name
              price
              value
              howMany
            }
          }
        }
        contentfulSiteSection2 {
          background {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { title, content } = data.contentfulSiteSection3;
      const { background } = data.contentfulSiteSection2;
      return (
        <SectionWithBackground
          id="pricing"
          backgroundsrc={background.fluid.src}
          lastsection="true"
        >
          <Header name={title} />
          <SectionContainer justifyContent="flex-end">
            <Flex
              justifyContent="center"
              alignItems={['stretch', 'center', 'center']}
              flexWrap="wrap"
              my={[4, 2, 4]}
              flexDirection={['column', 'row']}
            >
              {content.prices.map(item => (
                <Container key={item.name} mb={5} m={2}>
                  <PriceCard {...item} />
                  <StyledButton fontSize={[1, 1, 1]}>
                    <span>Zacznij już dziś!</span>
                  </StyledButton>
                </Container>
              ))}
            </Flex>
          </SectionContainer>
        </SectionWithBackground>
      );
    }}
  />
);

export default Pricing;
