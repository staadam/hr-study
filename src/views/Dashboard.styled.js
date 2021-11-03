import styled from 'styled-components';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 25px 40px;
  flex-direction: column;

  ${ViewWrapper} {
    margin: 0;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 25px auto;
  }
`;
