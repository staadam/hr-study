import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

export const Modal = ({ handleClose, isOpen, children, isGrade }) => {
  return (
    <ModalWrapper isGrade={isGrade} appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button isBig onClick={handleClose}>
        CloseModal
      </Button>
    </ModalWrapper>
  );
};
