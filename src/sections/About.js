import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';

import Section from '../components/Section';

const StyledTextBox = styled(Box)`
  font-size: 20px;
  padding: 3rem;
  line-height: 2rem;
  word-spacing: 2px;
  min-width: 200px;
  max-width: 450px;
  width: 100%;
  color: white;
  p {
    text-align: center;
  }
  ol {
    list-style: none;
    padding-inline-start: 0;
  }
`;

const StyledFlexContainer = styled.div`
  background: ${props => props.theme.colors.primaryGradient};
  position: relative;
  border-radius: 8px;
`;

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutgQuery {
        contentfulSiteSection1 {
          title
          aboutMe
          endText
          textFieldsBackgrounds {
            fluid(maxWidth: 720) {
              src
            }
          }
          table {
            column1 {
              title
              rows
            }
            column2 {
              title
              rows
            }
          }
        }
      }
    `}
    render={data => {
      const {
        title,
        aboutMe,
        endText,
        textFieldsBackgrounds,
        table,
      } = data.contentfulSiteSection1;
      const columns = [table.column1, table.column2];
      return (
        <Section.Container id="about">
          <Section.Header name={title} />
          <Text fontSize={[3, 4, 4]}>{aboutMe}</Text>
          <StyledFlexContainer>
            <Flex justifyContent="space-evenly">
              {columns.map((column, index) => (
                <StyledTextBox
                  boxIndex={index}
                  boxBackgroundSrc={textFieldsBackgrounds[index].fluid.src}
                >
                  <Text fontSize={[3, 4, 5]}>{column.title}</Text>
                  <ol>
                    {column.rows.map(row => (
                      <li>
                        <Text fontSize={[3, 3, 4]}>{row}</Text>
                      </li>
                    ))}
                  </ol>
                </StyledTextBox>
              ))}
            </Flex>
          </StyledFlexContainer>
          <Text fontSize={[3, 4, 4]}>{endText}</Text>
        </Section.Container>
      );
    }}
  />
);

export default About;
