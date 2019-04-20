import React, { Fragment } from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;
  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about">
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      `}
      render={data => {
        const { profile, aboutMe } = data.contentfulAbout;
        return (
          <Fragment>
            <Section.Header name="About me" />
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <ReactMarkdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Fade>
              </Box>

              <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '300px', margin: 'auto' }}
              >
                <Fade right>
                  <ProfilePicture
                    src={profile.image.src}
                    alt={profile.title}
                    mt={[4, 4, 0]}
                    ml={[0, 0, 1]}
                  />
                </Fade>
              </Box>
            </Flex>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default About;
