import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 20px 0 5px 0;
  }
`;

export const FormField = React.forwardRef(({ label, name, id, type = 'text', value, onChange, isTextarea, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextarea ? (
        <Input name={name} id={id} as="textarea" value={value} onChange={onChange} data-testid={label} {...props} ref={ref}></Input>
      ) : (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} {...props} ref={ref}></Input>
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
