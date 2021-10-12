import styled from 'styled-components';
import { Navigation } from 'components/molecules/Navigation/Navigation';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import { NewsSection } from 'components/templates/NewsSection/NewsSection';
import { NotesWidget } from 'components/organisms/NotesWidget/NotesWidget';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-columns: 150px 1fr;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <NewsSection />
      <NotesWidget />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
