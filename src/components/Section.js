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
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-evenly'};
  padding: 5em 1em;
  scroll-behavior: smooth;
  ${props => props.theme.mediaQueries.medium} {
    padding: 5em 1em;
  }
`;

export const SectionWithBackground = styled(Section)`
  background: ${props => `#f8f9fa url(${props.backgroundsrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${props => (props.lastsection ? 'right' : 'initial')};
  position: relative;
  margin-bottom: ${props => (props.lastsection ? '140vh' : '0')};
  box-shadow: ${props =>
    props.lastsection ? 'rgba(0, 0, 0, 0.3) 0px 20px 30px -20px' : 'none'};
  ${props => props.theme.mediaQueries.medium} {
    margin-bottom: ${props => (props.lastsection ? '600px' : '0')};
  }
`;

export const Container = ({ id, children }) => (
  <Section
    id={id}
    style={{
      backgroundColor: '#f8f9fa',
    }}
  >
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Header = ({ name, color = 'secondary' }) => (
  <Slide top>
    <Heading color={color} mb={4} textAlign="center" fontSize={[4, 4, 6]}>
      <LinkAnimated selected>{name}</LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export const DummySection = ({ id }) => (
  <Section
    id={id}
    style={{
      backgroundColor: '#f8f9fa',
    }}
  />
);

DummySection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default {
  Container,
  Header,
  SectionWithBackground,
  SectionContainer,
};
