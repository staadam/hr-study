import styled from 'styled-components';
import { FormField } from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;

  @media (max-width: 780px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 550px 1fr;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const FormWrapper = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  max-width: 340px;
  width: 90%;
  height: 80%;
  max-height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1280px) {
    height: 100%;
  }

  @media (max-width: 480px) {
    margin: 20px auto;
    padding: 30px;
  }
`;

export const StyledFormField = styled(FormField)`
  display: block;
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
  resize: none;
  width: 100%;
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
