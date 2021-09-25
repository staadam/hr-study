import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import { FormField } from './FormField';

describe('Input With Button', () => {
  it('Renders the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});
