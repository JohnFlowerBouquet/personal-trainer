import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Text, Image, Flex } from 'rebass';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import { SectionWithBackground, SectionContainer } from '../components/Section';
import GetStarted from '../components/GetStarted';
import ModalTogglerButton from '../components/Modal/modal-button'

const PhotoContainer = styled.div`
  width: 50%;
  order: 1;
  @media (min-width: 450px) {
    order: 2;
    width: 25%;
  }
`;

const HeadingContainer = styled.div`
  width: 50%;
  text-align: center;
  order: 2;
  @media (min-width: 450px) {
    order: 1;
  }
  @media screen and (max-width: 40em) {
    
    z-index: 1;
    width: 100%;
    form {
      text-align: left;
    }
  }
`;

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query SiteLandingQuery {
        contentfulSiteHeader {
          headerTitle,
          headerTexts,
          headerImage {
            fluid(quality: 100) {
                  src
                }
          },
          headerBackground {
            fluid(maxWidth: 1920) {
                  src
                }
          }
        }
      }
    `}
    render={data => {
      const { headerTitle, headerTexts, headerBackground, headerImage } = data.contentfulSiteHeader;
      return (
        <SectionWithBackground id="home" backgroundSrc={headerBackground.fluid.src}>
          <SectionContainer>
            <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
              <HeadingContainer>
                <Heading as="h1" color="white" fontSize={[5, 6, 8]} mb={[3, 4, 5]}>
                  <Text>{`${headerTitle}`}</Text>
                </Heading>

                <Heading as="h2" color="white" fontSize={[4, 5, 6]} mb={[3, 5]}>
                  <TextLoop>
                    {headerTexts.map(text => (
                      <Text width={[300, 500]} key={text}>
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
