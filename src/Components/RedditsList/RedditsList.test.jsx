import '@testing-library/jest-dom';
import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RedditsList from './RedditsList';

  const mockRedditResponse = {
    data: {
      children: [
        {
          data: {
            id: 'abc123',
            title: 'Test Post',
            score: 123,
            author: 'test_user',
            created_utc: 1680000000,
            selftext: 'This is a test post',
            post_hint: 'self',
          },
        },
        {
            data: {
              id: '2',
              title: 'Second Title',
              created_utc: 1710000001,
              score: 20,
              author: 'user2',
              selftext: 'This is a test post',
              post_hint: 'self',
            },
        },
      ],
    },
  };
  
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRedditResponse),
      })
    );
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
test('renders Reddit posts after fetch', async () => {
    render(
      <RedditsList
        query=""
        selectedSubreddit="javascript"
        setInputValue={() => {}}
        setQuery={() => {}}
      />
    );
  
    const postElement = await screen.findByText('Test Post');
    const postElement2 = await screen.findByText('Second Title');
    expect(postElement).toBeInTheDocument();
    expect(postElement2).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/javascript.json');
});

test('shows error box when no posts match query', async () => {
    render(
        <RedditsList
          query="no match"
          selectedSubreddit="javascript"
          setInputValue={() => {}}
          setQuery={() => {}}
        />
      );

    await waitFor(() => {
        expect(screen.getByTestId('error-box')).toBeInTheDocument()
    })
    
})

test('shows loading state initially', () => {
    act(() => {
      render(
        <RedditsList
          query=""
          selectedSubreddit="javascript"
          setInputValue={() => {}}
          setQuery={() => {}}
        />
      )
    })

    expect(screen.queryByTestId('post')).not.toBeInTheDocument()
  })