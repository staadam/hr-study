import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: ${({ isGrade }) => (isGrade ? '500px' : '600px')};
  min-height: ${({ isGrade }) => (isGrade ? '400px' : '700px')};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  max-width: 90vw;
  max-height: 90vh;

  overflow-y: scroll;
  &:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    min-width: 0;
    min-height: 0;
    padding: 0px;
  }
`;
