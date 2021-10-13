import { Wrapper, BigAverage, StyledDetails, StyledLabel, StyledInfo, StyledSubjectInfo } from './StudentDetails.styled';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage as Average } from 'components/atoms/Average/Average.styles';
import { Button } from 'components/atoms/Button/Button';
import { Modal } from 'components/organisms/Modal/Modal';
import { useModal } from 'components/organisms/Modal/useModal';
import { GradeForm } from 'components/molecules/GradeForm/GradeForm';

export const StudentDetails = ({ currentStudent, updateStudentDetails }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Wrapper>
      <BigAverage average={currentStudent.average}>{currentStudent.average}</BigAverage>
      <Title isBig>{currentStudent.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{currentStudent.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {currentStudent.grades.map(({ name, average }, index) => (
          <StyledSubjectInfo key={`${name}-${index}`}>
            <StyledInfo>{name}</StyledInfo>
            <Average average={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
        <Button onClick={handleOpenModal}>Add Grade</Button>
        <Modal isGrade isOpen={isOpen} handleClose={handleCloseModal}>
          <GradeForm id={currentStudent.id} updateStudentDetails={updateStudentDetails} handleCloseModal={handleCloseModal}></GradeForm>
        </Modal>
      </StyledDetails>
    </Wrapper>
  );
};
