import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
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
  height: 200px;
  z-index: -101;
  bottom: 0;
  width: 100%;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
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
    <Fade bottom>
      <Text
        pb={1}
        style={{
          textTransform: 'uppercase',
          borderBottom: 'white 3px solid',
          display: 'table',
        }}
      >
        <span>Trener Personalny</span>
      </Text>
      <Flex justifyContent="center" alignItems="center">
        <Text m={2} fontSize={4}>
          <span>Małgorzata Małaczek</span>
        </Text>
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
