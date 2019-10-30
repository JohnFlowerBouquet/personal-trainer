import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Footer from '../components/Footer';
import ModalContext from '../components/Modal/modal-context';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Features />
    <Pricing />
    <Footer />
    <ModalContext.Consumer>
      {
        (props) => (
          <Modal open={props.open} onClose={() => props.onCloseModal()} center>
            <h2>Simple centered modal</h2>
          </Modal>
        )
      }
    </ModalContext.Consumer>
  </Layout>
);
IndexPage.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export default IndexPage;
