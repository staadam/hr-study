import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.6s ease-in-out;
  height: 700px;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  box-sizing: border-box;
  z-index: 999;

  @media (max-width: 900px) {
    top: 0;
    width: 100%;
    height: 100vh;
  }
`;

export const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  border-radius: 8px 8px 0 0;
  top: 23px;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 900px) {
    top: ${({ isOpen }) => (isOpen ? '0px' : '63px')};
    left: ${({ isOpen }) => (isOpen ? '0px' : '-55px')};
    border-radius: ${({ isOpen }) => (isOpen ? '0 0 8px 0' : '8px 8px 0 0')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(-90deg)')};
  }
`;

export const NotesWrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;
