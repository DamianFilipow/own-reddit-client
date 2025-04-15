import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesList from './CategoriesList';

describe('CategoriesList', () => {
  
  const subreddits = [
    'popular', 'funny', 'askReddit', 'gaming', 'aww', 'music', 'pics', 'science',
    'worldnews', 'videos', 'todayilearned', 'movies', 'news', 'showerthoughts',
    'earthPorn','IAmA', 'food', 'space', 'askscience',
    'explainlikeimfive', 'books', 'television', 'sports', 'technology',
  ];

  it('renders without crashing and displays all subreddits', () => {
    render(<CategoriesList setSubreddit={() => {}} selectedSubreddit='popular'/>)

    const container = screen.getByTestId('categories-list')
    expect(container).toBeInTheDocument()

    subreddits.forEach((sub) => {
      expect(screen.getByText(sub)).toBeInTheDocument()
    })
  })

  it('applies "selected" class to selected subreddit and "notSlected" to others', () => {
    render(<CategoriesList setSubreddit={() => {}} selectedSubreddit='gaming' />)

    subreddits.forEach((sub) => {
      const button = screen.getByText(sub)
      if (sub === 'gaming') {
        expect(button).toHaveClass('selected')
      } else {
        expect(button).toHaveClass('notSelected')
      }
    })
  })

  it('calls setSubreddit when a button is clicked', () => {
    const mockSetSubreddit = jest.fn()
    render(<CategoriesList setSubreddit={mockSetSubreddit} selectedSubreddit="aww" />)

    const button = screen.getByText('science')
    fireEvent.click(button)

    expect(mockSetSubreddit).toHaveBeenCalledWith('science')
  })

})