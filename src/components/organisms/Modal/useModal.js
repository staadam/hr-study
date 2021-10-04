import { useState } from 'react';

export const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleCloseModal = () => {
    setModalState(false);
  };
  const handleOpenModal = () => {
    setModalState(true);
  };

  return { isOpen, handleOpenModal, handleCloseModal };
};
