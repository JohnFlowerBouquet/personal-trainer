import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Heading } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  z-index: 9;
  .headroom--pinned {
    background: ${props => props.theme.colors.primary};

    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
  }
  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              <RouteLink key={home.name} onClick={home.onClick}>
                <Heading
                  textAlign="center"
                  as="h3"
                  color="white"
                  fontSize={[3, 4, 5]}
                >
                  {`Trener Personalny`}
                </Heading>
              </RouteLink>
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));

            return (
              <Fragment>
                {homeLink}
                <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
