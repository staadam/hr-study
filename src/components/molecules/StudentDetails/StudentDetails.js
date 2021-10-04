import { Wrapper, BigAverage, StyledDetails, StyledLabel, StyledInfo, StyledSubjectInfo } from './StudentDetails.styled';
import { StyledTitle as Title } from 'components/atoms/Title/Title';
import { StyledAverage as Average } from 'components/atoms/Average/Average.styles';

export const StudentDetails = ({ currentStudent }) => {
  return (
    <Wrapper>
      <BigAverage average={currentStudent.average}>{currentStudent.average}</BigAverage>
      <Title isBig>{currentStudent.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{currentStudent.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {currentStudent.grades.map(({ name, average }) => (
          <StyledSubjectInfo key={name}>
            <StyledInfo>{name}</StyledInfo>
            <Average average={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};
