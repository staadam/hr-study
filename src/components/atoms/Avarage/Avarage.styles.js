import styled from 'styled-components';

export const StyledAvarage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ avarage, theme }) => {
    if (avarage > 4) return theme.colors.success;
    if (avarage > 3) return theme.colors.warning;
    if (avarage > 2) return theme.colors.error;
  }};
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.white};
`;
