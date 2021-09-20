import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Enter your name" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });

  it('Properly handles value change', () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText('Enter your name');
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: 'Roman' } });
    expect(input).toHaveValue('Roman');
  });
});
