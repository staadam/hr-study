import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
