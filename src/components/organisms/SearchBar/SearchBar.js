import { Input } from 'components/atoms/Input/Input';
import { StatusInfo, SearchBarWrapper } from './SearchBar.styles';

export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input placeholder="Find by student name" />
  </SearchBarWrapper>
);
