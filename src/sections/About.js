import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';

import Section from '../components/Section';

const StyledTextBox = styled(Box)`
  font-size: 20px;
  padding: 10px;
  line-height: 2rem;
  word-spacing: 2px;
  min-width: 300px;
  max-width: 450px;
  width: 100%;
  color: white;
  border-radius: 70px;
  p {
    text-align: center;
  }
  ol {
    list-style: none;
  }
`;

const StyledFlexContainer = styled.div`
  background: ${(props) => props.theme.colors.primaryGradient};
  width: 100vw;
  position: relative;
  left: -200px;
`

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutgQuery { 
        contentfulSiteSection1{
          title,
          aboutMe,
          endText,
          textFieldsBackgrounds {
            fluid(maxWidth: 720) {
              src
            }
          },
          table {
            column1 {
              title,
              rows
            }
            column2 {
              title,
              rows
            }
          }
        }
      }
    `}
    render={data => {
      const { title, aboutMe, endText, textFieldsBackgrounds, table } = data.contentfulSiteSection1;
      const columns = [table.column1, table.column2];
      return (
        <Section.Container id="about">
          <Section.Header name={title} />
          <Text fontSize={[3, 4, 4]}>
            {aboutMe}
          </Text>
          <StyledFlexContainer>
            <Flex justifyContent="space-evenly" flexWrap="wrap">
              {columns.map((column, index) => (
                <StyledTextBox boxIndex={index} boxBackgroundSrc={textFieldsBackgrounds[index].fluid.src}>
                  <p>{column.title}</p>
                  <ol>
                    {column.rows.map(row => (
                      <li>{row}</li>
                    ))}
                  </ol>
                </StyledTextBox>
              ))}
            </Flex>
          </StyledFlexContainer>
          <Text fontSize={[3, 4, 4]}>
            {endText}
          </Text>
        </Section.Container>
      )
    }
    }
  />
);

export default About;