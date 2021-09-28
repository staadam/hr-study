import { useState } from 'react';
import { Modal } from './Modal';

export const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleCloseModal = () => {
    setModalState(false);
  };
  const handleOpenModal = () => {
    setModalState(true);
  };

  return { Modal, isOpen, handleOpenModal, handleCloseModal };
};
