import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Footer from '../components/Footer';
import Modal from '../components/Modal/Modal';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Features />
    <Pricing />
    <Footer />
    <Modal />
  </Layout>
);

export default IndexPage;
