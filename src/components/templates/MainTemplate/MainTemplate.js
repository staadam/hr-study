import styled from 'styled-components';
import { Navigation } from 'components/molecules/Navigation/Navigation';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 150px 1fr;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
