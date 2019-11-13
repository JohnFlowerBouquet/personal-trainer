import React from 'react';
import ModalContainer from 'react-responsive-modal';
import styled from 'styled-components';
import { Text, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';
import GetStarted from '../GetStarted';

import ModalContext from './modal-context';

const ModalBody = styled(Box)`
  width: 80vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.theme.mediaQueries.medium} {
    width: 400px;
  }
`;

const Modal = () => (
  <ModalContext.Consumer>
    {({ open, onCloseModal }) => (
      <ModalContainer open={open} onClose={() => onCloseModal()} center>
        <ModalBody>
          <Text>Zapisz się na trening!</Text>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
          />
          <GetStarted />
        </ModalBody>
      </ModalContainer>
    )}
  </ModalContext.Consumer>
);

export default Modal;
