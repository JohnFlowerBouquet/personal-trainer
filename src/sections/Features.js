import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import { Card } from '../components/Card';

const Title = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  text-align: center;
`;

const StyledBox = styled(Box)`
  text-align: center;
`;

const FunCard = ({ title, content }) => (
  <Card p={2}>
    <Flex flexDirection="column">
      <Title fontSize={[3, 3, 3]} my={2} pb={1}>
        {title}
      </Title>
      {content.map(text => (
        <Text key={text} fontSize={[2, 3, 3]} lineHeight={1.5}>
          <span>• </span>
          {text}
        </Text>
      ))}
    </Flex>
  </Card>
);

FunCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const Features = () => (
  <StaticQuery
    query={graphql`
      query CardsQuery {
        contentfulSiteSection2 {
          title
          icons {
            fluid(maxWidth: 720) {
              src
            }
          }
          content {
            field1 {
              title
              content
            }
            field2 {
              title
              content
            }
            field3 {
              title
              content
            }
          }
        }
        contentfulSiteHeader {
          headerImage {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { title, content, icons } = data.contentfulSiteSection2;
      return (
        <Section.Container id="features">
          <Section.Header name={title} />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            flexDirection={['column', 'row']}
          >
            {Object.values(content).map((item, i) => (
              <StyledBox
                key={item.title}
                width={[1, 1 / 3]}
                px={[2, 4]}
                mb={[5, 0, 0]}
              >
                <Image src={icons[i].fluid.src} width={[1 / 2, 1 / 3]} />
                <FunCard {...item} />
              </StyledBox>
            ))}
          </Flex>
        </Section.Container>
      );
    }}
  />
);

export default Features;
