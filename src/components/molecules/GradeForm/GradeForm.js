import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { FormField } from 'components/molecules/FormField/FormField';
import { useForm } from 'react-hook-form';
import { useAddStudentGradeMutation } from 'store/store';
import styled from 'styled-components';

const FormWrapper = styled.form``;

export const GradeForm = ({ id, updateStudentDetails, handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddGrade = async ({ name, average }) => {
    const { data } = await addGrade({
      id,
      grade: {
        name,
        average,
      },
    });
    updateStudentDetails(data.student);
    handleCloseModal();
  };

  const [addGrade] = useAddStudentGradeMutation();

  return (
    <FormWrapper>
      <FormField label="Subjec" name="subject" id="subject" {...register('name', { required: true })} />
      {errors.subject ? 'Subject is required' : null}
      <FormField label="Grade" name="grade" id="grade" type="number" {...register('average', { required: true })} />
      {errors.grade ? 'Grade is required and must contain only numbers' : null}
      <Button onClick={handleSubmit(handleAddGrade)}>Add</Button>
    </FormWrapper>
  );
};
