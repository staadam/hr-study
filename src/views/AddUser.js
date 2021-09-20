import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendence: '',
  avarage: '',
  consent: false,
  error: '',
};

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state, //other form fields
        [action.field]: action.value, //form field which is being changed at the moment
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = (e) => {
    dispatch({ type: actionTypes.clearValues, field: e.target.name, value: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValues, value: initialFormState });
    } else {
      dispatch({ type: actionTypes.throwError, errorValue: 'You need to give consent' });
    }
  };

  return (
    <>
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
        <StyledTitle>Add student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendence" id="attendence" name="attendence" value={formValues.attendence} onChange={handleInputChange} />
        <FormField label="Avarage" id="avarage" name="avarage" value={formValues.avarage} onChange={handleInputChange} />
        <FormField
          label="Consent"
          id="consent"
          name="consent"
          type="checkbox"
          value={formValues.consent}
          onChange={() => dispatch({ type: actionTypes.consentToggle })}
        />
        {formValues.error ? <p>{formValues.error}</p> : null}
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};
