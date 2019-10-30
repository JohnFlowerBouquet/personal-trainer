import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

export const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "space-evenly"};
  padding: 10em 1em;
  scroll-behavior: smooth;
  @media (min-width: 450px) {
    padding: 5em 1em;
  }
`;

export const SectionWithBackground = styled(Section)`
  background: ${props => `#f8f9fa url(${props.backgroundSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: initial;
  position: relative;
  margin-bottom: ${props => props.lastSection ? '120vh' : '0'};
  box-shadow: ${props => props.lastSection ? 'rgba(0, 0, 0, 0.3) 0px 20px 30px -20px'
    : 'none'
  };

  @media (min-width: 450px) {
    margin-bottom: ${props => props.lastSection ? '600px' : '0'};
  }
`;

export const Container = ({ id, children }) => (
  <Section
    id={id}
    style={{
      backgroundColor: '#f8f9fa'
    }}
  >
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Header = ({ name, color }) => (
  <Slide top>
    <Heading
      color={color ? color : "secondaryDark"}
      mb={4}
      textAlign="center"
      fontSize={[5, 4, 6]}
    >
      <LinkAnimated selected>{name}</LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default {
  Container,
  Header,
  SectionWithBackground,
  SectionContainer
};
