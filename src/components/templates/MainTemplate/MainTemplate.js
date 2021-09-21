import styled from 'styled-components';
import { Navigation } from 'components/molecules/Navigation/Navigation';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
`;

const News = styled.div`
  grid-row: 1/3;
  grid-column: 3/4;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <News>
        <p>Siemanko</p>
      </News>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
