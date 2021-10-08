import { SearchBar } from './SearchBar';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import '@testing-library/jest-dom';

describe('Search Bar', () => {
  it('Render the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Find by student name');
  });

  it('Displays users when searched phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find by student name');
    fireEvent.change(input, { target: { value: 'Lon' } });

    const name = await screen.findAllByText(/Lonnie/);
    console.log(name);
  });

  it('Hides users when input is cleared', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find by student name');
    fireEvent.change(input, { target: { value: 'Lon' } });
    await screen.findAllByText(/Lonnie Deckow/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => expect(screen.getByLabelText('results')).not.toBeVisible());
  });
});
