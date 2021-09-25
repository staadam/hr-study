import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    padding: 10px 15px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;
export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

export const SearchResult = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;

  width: 100%;
  max-height: 400px;
  margin: 0;
  padding: 10px 0;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;

  background-color: #fff;
  color: ${({ theme }) => theme.colors.darkGrey};
  list-style: none;
  overflow-y: scroll;
`;

export const SearchResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-weight: 700;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
  }

  background-color: ${({ highlightedIndex, theme }) => (highlightedIndex ? theme.colors.lightPurple : 'transparent')};
`;
