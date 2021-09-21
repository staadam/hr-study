import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendence: '',
  avarage: '',
  consent: false,
  error: '',
};

export const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleClearForm();
      handleAddUser(formValues);
    } else {
      handleThrowError('You need to give consent!');
    }
  };

  return (
    <>
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
        <StyledTitle>Add student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendence" id="attendence" name="attendence" value={formValues.attendence} onChange={handleInputChange} />
        <FormField label="Avarage" id="avarage" name="avarage" value={formValues.avarage} onChange={handleInputChange} />
        <FormField label="Consent" id="consent" name="consent" type="checkbox" value={formValues.consent} onChange={() => handleToggleConsent()} />
        {formValues.error ? <p>{formValues.error}</p> : null}
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};
