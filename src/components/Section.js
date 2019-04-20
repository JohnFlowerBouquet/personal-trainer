import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Container = ({ id, children, Background }) => (
  <Section
    id={id}
    style={
      Background
        ? {
            position: 'relative',
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }
        : {
            backgroundColor: '#fff',
            marginBottom: `${id === 'articles' ? '200px' : '0'}`,
            boxShadow: `${
              id === 'articles'
                ? 'rgba(0, 0, 0, 0.3) 0px 20px 30px -20px'
                : 'none'
            }`,
          }
    }
  >
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name }) => (
  <Slide top>
    <Heading
      color="secondaryDark"
      mb={4}
      textAlign="center"
      fontSize={[3, 4, 6]}
    >
      <LinkAnimated selected>{name}</LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default {
  Container,
  Header,
};
