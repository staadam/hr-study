import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  height: 700px;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  box-sizing: border-box;
  z-index: 999;
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
`;

export const NotesWrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;
