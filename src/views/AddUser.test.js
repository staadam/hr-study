import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddUser } from './AddUser';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import { Dashboard } from './Dashboard';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Nikola' } });
    fireEvent.change(screen.getByTestId('Attendence'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Avarage'), { target: { value: '4.3' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Nikola');
  });

  it('Prevents adding new user without consent', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Nikola' } });
    fireEvent.change(screen.getByTestId('Attendence'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Avarage'), { target: { value: '4.3' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Nikola');
    expect(newUser).not.toBeInTheDocument();
  });
});
