import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { NewsSection, query, url } from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays errors when the articles are not loaded', async () => {
    mock.onPost(url, { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost(url, { query }).reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });

  it('Displays loading', async () => {
    // mock.onPost(url, { query }).reply(200, { data: { allArticles: [] } });
    renderWithProviders(<NewsSection />);
    await screen.findByTestId('loader');
    mock.onPost(url, { query }).reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
