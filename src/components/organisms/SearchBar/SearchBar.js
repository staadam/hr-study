import { Input } from 'components/atoms/Input/Input';
import { useState } from 'react';
import { StatusInfo, SearchBarWrapper, SearchResult, SearchWrapper, SearchResultItem } from './SearchBar.styles';
import { useSearchStudentsMutation } from 'store/store';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);

  const [getMatchingStudents] = useSearchStudentsMutation();

  const findStudents = async ({ inputValue }) => {
    const { data } = await getMatchingStudents({ studentName: inputValue });
    setMatchingStudents(data);
  };

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: findStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input name="search" id="Search" placeholder="Find by student name" {...getInputProps()} />
        <SearchResult aria-label="results" isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultItem highlightedIndex={highlightedIndex === index} key={`${item.id}-bar`} {...getItemProps({ item, index })}>
                {item.name}
              </SearchResultItem>
            ))}
        </SearchResult>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
