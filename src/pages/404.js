import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404">
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']}>
          <p>404</p>
        </Heading>
        <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']}>
          {"There isn't anything here"}
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
