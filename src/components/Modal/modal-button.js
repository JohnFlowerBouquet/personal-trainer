import React from 'react';
import ModalContext from './modal-context';



const ModalTogglerButton = () => (
    <ModalContext.Consumer>
        {(props) => (
            <button onClick={() => props.onOpenModal()}>
                Toggle Theme
                </button>
        )}
    </ModalContext.Consumer>
)

export default ModalTogglerButton;