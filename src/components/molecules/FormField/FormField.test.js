import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormField } from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
