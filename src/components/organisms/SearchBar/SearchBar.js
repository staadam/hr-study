import { Input } from 'components/atoms/Input/Input';
import { useEffect, useState } from 'react';
import { StatusInfo, SearchBarWrapper, FindedStudents, SearchWrapper } from './SearchBar.styles';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedStudents, setSearchedStudents] = useState('');

  const handleInputChange = (e) => setSearchValue(e.target.value);
  const { getMatchingStudents } = useStudents();

  useEffect(() => {
    const findStudents = async () => {
      const { students } = await getMatchingStudents(searchValue);
      setSearchedStudents(students);
    };

    findStudents();
  }, [searchValue]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={handleInputChange} value={searchValue} placeholder="Find by student name" />
        {searchedStudents ? (
          <FindedStudents>
            {searchedStudents.map((student) => (
              <li key={`${student.id}-bar`}>{student.name}</li>
            ))}
          </FindedStudents>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
