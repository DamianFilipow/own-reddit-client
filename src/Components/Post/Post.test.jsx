import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Post from './Post';

const baseData = {
  title: 'Test Post',
  score: 123,
  author: 'test_author',
  created_utc: 1672531200,
  selftext: 'Some self text here',
};

test('renders title, score, author, and time', () => {
  render(<Post data={baseData} />);
  expect(screen.getByText(/Test Post/)).toBeInTheDocument();
  expect(screen.getByText(/123/)).toBeInTheDocument();
  expect(screen.getByText(/test_author/)).toBeInTheDocument();
  expect(screen.getByText(/Created at:/)).toBeInTheDocument();
});

test('renders image when post_hint is image', () => {
  const data = {
    ...baseData,
    post_hint: 'image',
    preview: {
      images: [
        {
          source: {
            url: 'https://example.com/image.jpg',
          },
        },
      ],
    },
  };

  render(<Post data={data} />);
  const img = screen.getByAltText(/Image for Test Post/);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
});

test('renders YouTube iframe', () => {
  const data = {
    ...baseData,
    post_hint: 'rich:video',
    media: {
      oembed: {
        provider_name: 'YouTube',
      },
    },
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  };

  render(<Post data={data} />);
  const iframe = screen.getByTitle(/Test Post/);
  expect(iframe).toBeInTheDocument();
  expect(iframe.tagName).toBe('IFRAME');
});

test('renders fallback selftext when no media is found', () => {
  const data = {
    ...baseData,
    post_hint: 'link',
  };

  render(<Post data={data} />);
  expect(screen.getByText(/Some self text here/)).toBeInTheDocument();
});