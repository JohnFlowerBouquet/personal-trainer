/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import { DummySection } from './Section';

const FooterContainer = styled.footer`
  padding: 1em;
  background: white;
  color: ${props => props.theme.colors.primary};
  position: fixed;
  height: 100vh;
  z-index: -101;
  bottom: 0;
  width: 100%;
  @media (min-width: 450px) {
    height: 500px;
  }
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Map = styled.iframe`
  overflow: hidden;
  background: none !important;
  width: 100vw;
  height: calc(100vh / 2);
  min-height: 300px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  margin-bottom: 3rem;

  ${props => props.theme.mediaQueries.medium} {
    height: 400px;
    width: 400px;
    border-radius: 10px;
    margin-bottom: 0;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <Fragment>
    <DummySection id="contact" />
    <FooterContainer>
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        <Map
          title="Google Map"
          src="https://maps.google.com/maps?q=hasta%20la%20vista&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text
            fontSize={[3, 5, 5]}
            pb={1}
            style={{
              textTransform: 'uppercase',
            }}
          >
            Trener Personalny
          </Text>
          <Text fontSize={[4, 6, 6]} mt={2}>
            Małgorzata Małaczek
          </Text>
          <Text fontSize={[2, 4, 4]} pb={1} mb={4}>
            malaczek.malgorzata@gmail.com
          </Text>
          <Text
            fontSize={[2, 3, 3]}
            pb={1}
            style={{
              textAlign: 'center',
              lineHeight: '1em',
            }}
          >
            Treningi prowadzę na obiekcie
          </Text>
          <Text fontSize={[2, 3, 3]}>Hasta La Vista</Text>
        </Flex>
      </Flex>
    </FooterContainer>
  </Fragment>
);

export default Footer;
