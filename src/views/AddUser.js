import React from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

export const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendence" id="attendence" name="attendence" value={formValues.attendence} onChange={handleInputChange} />
        <FormField label="Avarage" id="avarage" name="avarage" value={formValues.avarage} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};
