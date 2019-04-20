import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Articles from '../sections/Articles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Features />
    <Pricing />
    <Articles />
    <Footer />
  </Layout>
);

export default IndexPage;
