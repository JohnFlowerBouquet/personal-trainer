import React, { Fragment } from 'react';
import { Text, Flex, Box, Button } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { SectionWithBackground, SectionContainer, Header } from '../components/Section';

const Container = styled(Box)`
  flex: 1 1 300px;
  max-width: 300px;
  text-align: center;
  padding: 40px 30px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  border-radius: 8px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: -25px;
  padding: 1rem 1.5rem;
  letter-spacing: 1px;
  background-color: #d291bc;
  border-radius: 0;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
`;

const PriceCard = ({ sum, name, price, value, howMany }) => (
  <Flex flexDirection="column" alignItems="center">
    <Text my={[1, 3, 3]} fontSize={[3, 4, 4]}>{name}</Text>
    <Text my={[1, 2, 4]} fontSize={[4, 4, 6]} color='#d291bc'>{price}</Text>
    <Text my={[1, 2, 2]} fontSize={[3, 4, 3]}>{value}</Text>
    <Text my={[1, 2, 4]} fontSize={[3, 4, 2]}>{sum}</Text>
    <Text my={3} fontSize={[2, 2, 3]}>{howMany}</Text>
  </Flex>
);

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
          },
          contentfulSiteSection2{
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
        <SectionWithBackground id="pricing" backgroundSrc={background.fluid.src} lastSection>
          <Header name={title} />
          <SectionContainer justifyContent="flex-end">

            <Flex justifyContent="center" alignItems="center" flexWrap="wrap" my={[0, 2, 4]}>
              {content.prices.map((item, i) => (
                <Container mb={5} m={2}>
                  <Fade bottom delay={i * 200}>
                    <PriceCard key={item.name} {...item} />
                  </Fade>
                  <StyledButton
                    fontSize={[1, 1, 1]}
                  >
                    <span>Zacznij już dziś!</span>
                  </StyledButton>
                </Container>
              ))}
            </Flex>
          </SectionContainer>
        </SectionWithBackground>
      )
    }}
  />
);

export default Pricing;
