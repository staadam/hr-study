import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { NewsSection, query, url } from './NewsSection';
import { render } from 'test-utils';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays errors when the articles are not loaded', async () => {
    mock.onPost(url, { query }).reply(500);
    render(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost(url, { query }).reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    render(<NewsSection />);
    await screen.findAllByText(/Test/);
  });

  it('Displays loading', async () => {
    // mock.onPost(url, { query }).reply(200, { data: { allArticles: [] } });
    render(<NewsSection />);
    await screen.findByTestId('loader');
    mock.onPost(url, { query }).reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    render(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
