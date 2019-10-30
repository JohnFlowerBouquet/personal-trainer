import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  text-align: center;
`;

const FunCard = ({ title, content }) => (
  <Card p={2}>
    <Flex flexDirection="column">
      <Title my={2} pb={1}>
        {title}
      </Title>
      {content.map(text => (
        <Text key={text}>
          • {text}
        </Text>
      ))}
    </Flex>
  </Card>
);

const Features = () => (
  <StaticQuery
    query={graphql`
        query CardsQuery {
          contentfulSiteSection2{
            title,
            background {
              fluid(maxWidth: 1920) {
                    src
                  }
            },
            content {
              field1 {
                title,
                content
              }
              field2 {
                title,
                content
              }
              field3 {
                title,
                content
              }
            }
          },
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
      const { title, content, background } = data.contentfulSiteSection2;
      const { headerImage } = data.contentfulSiteHeader;
      return (
        <Section.Container id="features" Background={background.fluid.src}>
          <Section.Header name={title} Background={background.fluid.src} />
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            {Object.values(content).map((item, i) => (
              <Box width={[1, 1, 1 / 3]} px={[1, 2, 4]}>
                <Image src={headerImage.fluid.src} width={[1 / 2]} />
                <FunCard key={item.title} {...item} />
              </Box>
            ))}
          </Flex>
        </Section.Container>
      );
    }}
  />

);

export default Features;
