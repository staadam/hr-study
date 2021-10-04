import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xxl : theme.fontSize.xl)};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
