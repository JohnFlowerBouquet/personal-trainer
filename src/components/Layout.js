import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import colors from '../../colors';
import Helmet from './Helmet';
import ModalContext from './Modal/modal-context';


const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
}
`;

config({ ssrFadeout: true });

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.onOpenModal = () => {
      this.setState({ open: true });
    };
    this.onCloseModal = () => {
      this.setState({ open: false });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      open: false,
      onOpenModal: this.onOpenModal,
      onCloseModal: this.onCloseModal
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={{ colors }}>
          <ModalContext.Provider value={this.state}>
            <ScrollingProvider>
              <Helmet />
              {children}
            </ScrollingProvider>
          </ModalContext.Provider>
        </ThemeProvider>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
