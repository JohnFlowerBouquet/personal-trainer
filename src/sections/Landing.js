import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Text, Image, Button } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import styled from 'styled-components';
import Section from '../components/Section';
import GetStarted from '../components/GetStarted';

const PhotoContainer = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  @media screen and (max-width: 40em) {
    width: 60%;
    top: 10%;
    span {
      display: none;
    }
  }
`;

const HeadingContainer = styled.div`
  width: 50%;
  text-align: center;
  @media screen and (max-width: 40em) {
    margin-top: 20%;
    z-index: 1;
    width: 100%;
    form {
      text-align: left;
    }
  }
`;

const ScrollLink = styled.span`
  cursor: pointer;
  position: relative;
  margin-left: 20%;
  margin-top: -10px;
`;

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulPerson {
          name
          spec
          photo {
            fluid(quality: 100) {
              src
            }
          }
          background: image {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { name, spec, background, photo } = data.contentfulPerson;
      return (
        <Section.Container id="home" Background={background.fluid.src}>
          <HeadingContainer>
            <Heading as="h1" color="white" fontSize={[5, 6, 8]} mb={[3, 4, 5]}>
              <Text>{`${name}`}</Text>
            </Heading>

            <Heading as="h2" color="white" fontSize={[4, 5, 6]} mb={[3, 5]}>
              <TextLoop>
                {spec.map(text => (
                  <Text width={[300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>
            <GetStarted />
          </HeadingContainer>
          <PhotoContainer>
            <Image src={`${photo.fluid.src}`} width={[1, 1, 1 / 2]} />
            <SectionLink section="about">
              {({ onClick }) => (
                <ScrollLink onClick={onClick}>
                  <Button
                    fontSize={[1, 1, 1]}
                    bg="secondary"
                    borderRadius="15px"
                  >
                    <span>Learn More</span>
                  </Button>
                </ScrollLink>
              )}
            </SectionLink>
          </PhotoContainer>
        </Section.Container>
      );
    }}
  />
);

export default LandingPage;
