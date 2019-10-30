import React from 'react';
import { Modal as ModalContainer } from 'react-responsive-modal';
import ModalContext from './modal-context';



const Modal = () => (
    <ModalContext.Consumer>
        {(props) => (
            <ModalContainer open={props.open} onClose={() => props.onCloseModal()} center>
                <h2>Simple centered modal</h2>
            </ModalContainer>
        )}
    </ModalContext.Consumer>
)

export default Modal;