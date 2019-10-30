import React from 'react';

// eslint-disable-next-line import/prefer-default-export
const { Provider, Consumer } = React.createContext({
    open: false,
    onOpenModal: () => { },
    onCloseModal: () => { }
});

const ModalContext = { Provider, Consumer };

export default ModalContext;