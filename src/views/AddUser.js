import React, { useContext, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendence: '',
  avarage: '',
};

export const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <>
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendence" id="attendence" name="attendence" value={formValues.attendence} onChange={handleInputChange} />
        <FormField label="Avarage" id="avarage" name="avarage" value={formValues.avarage} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};
