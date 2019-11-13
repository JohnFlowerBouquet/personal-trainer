import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'rebass';
import ModalContext from './Modal/modal-context';

const GetStarted = () => (
  <ModalContext.Consumer>
    {props => (
      <Button
        onClick={() => props.onOpenModal()}
        bg="secondary"
        ml={[0, 3, 3]}
        mt={[2, 2, 2]}
        px={[2, 4, 4]}
        py={[2, 2, 3]}
        borderRadius="25px"
      >
        <Text fontSize={[1, 2, 3]}>Napisz do mnie!</Text>
      </Button>
    )}
  </ModalContext.Consumer>
);

GetStarted.propTypes = {
  onOpenModal: PropTypes.func,
};

export default GetStarted;
