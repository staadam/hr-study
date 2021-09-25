import { SearchBar } from './SearchBar';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from 'test-utils';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Render the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Find by student name');
  });

  it('Displays users when searched phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find by student name');
    fireEvent.change(input, { target: { value: 'ad' } });

    const adam = await screen.findAllByText(/Adam/);
    console.log(adam);
  });

  it('Hides users when input is cleared', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find by student name');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findAllByText(/Adam/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => expect(screen.getByLabelText('results')).not.toBeVisible());
  });
});
