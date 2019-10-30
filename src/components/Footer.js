import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import PropTypes from 'prop-types';

const FooterContainer = styled.footer`
  padding: 1em;
  background: white;
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  z-index: -101;
  bottom: 0;
  width: 100%;
  @media (min-width: 450px) {
    height: 600px;
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

const Map = styled.div`
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    width: 100vw;
    height: auto;
    max-height: 400px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    border-radius: 0px;
    margin-bottom: 3rem;

    @media (min-width: 450px) {
      height:450px;
      width:450px;
      border-radius: 10px;
      margin-bottom: 0;
    }
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
  <FooterContainer>
    <Flex justifyContent="space-evenly" flexWrap="wrap" style={{ width: '80%' }}>
      <Map>
        <div className="gmap_canvas">
          <iframe title="Google Map" width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hasta%20la%20vista&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
        </div>
      </Map>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text
          pb={1}
          style={{
            textTransform: 'uppercase'
          }}
        >
          <span>Trener Personalny</span>
        </Text>
        <Text mt={2} fontSize={4}>
          <span>Małgorzata Małaczek</span>
        </Text>
        <Text
          pb={1}
          mb={2}
        >
          <span>malaczek.malgorzata@gmail.com</span>
        </Text>
        <Text
          pb={1}
          style={{
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          <p>Treningi prowadzę na obiekcie</p>
          <span>Hasta La Vista</span>
        </Text>
      </Flex>
    </Flex>
  </FooterContainer>
);

export default Footer;
