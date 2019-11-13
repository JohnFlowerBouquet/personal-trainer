import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Text, Image, Flex } from 'rebass';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import { SectionWithBackground, SectionContainer } from '../components/Section';
import GetStarted from '../components/GetStarted';

const PhotoContainer = styled.div`
  width: 50%;
  order: 1;
  margin-top: 30px;
  ${props => props.theme.mediaQueries.medium} {
    order: 2;
    width: 25%;
    margin-top: 0px;
  }
`;

const HeadingContainer = styled.div`
  text-align: center;
  order: 2;
  width: 100%;
  ${props => props.theme.mediaQueries.medium} {
    order: 1;
    width: 50%;
  }
`;

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query SiteLandingQuery {
        contentfulSiteHeader {
          headerTitle
          headerTexts
          headerImage {
            fluid(quality: 100) {
              src
            }
          }
          headerBackground {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const {
        headerTitle,
        headerTexts,
        headerBackground,
        headerImage,
      } = data.contentfulSiteHeader;
      return (
        <SectionWithBackground
          id="home"
          backgroundsrc={headerBackground.fluid.src}
        >
          <SectionContainer>
            <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
              <HeadingContainer>
                <Heading
                  as="h1"
                  color="white"
                  fontSize={[5, 6, 8]}
                  mb={[2, 4, 5]}
                >
                  <Text>{`${headerTitle}`}</Text>
                </Heading>

                <Heading as="h2" color="white" fontSize={[4, 5, 6]} mb={[3, 5]}>
                  <TextLoop>
                    {headerTexts.map(text => (
                      <Text width={[300, 300, 500]} key={text}>
                        {text}
                      </Text>
                    ))}
                  </TextLoop>
                </Heading>
                <GetStarted />
              </HeadingContainer>
              <PhotoContainer>
                <Image src={headerImage.fluid.src} />
              </PhotoContainer>
            </Flex>
          </SectionContainer>
        </SectionWithBackground>
      );
    }}
  />
);

export default LandingPage;
