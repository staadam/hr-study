import styled from 'styled-components';

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ average, theme }) => {
    if (average >= 4) return theme.colors.success;
    if (average >= 3) return theme.colors.warning;
    if (average >= 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.white};
`;
