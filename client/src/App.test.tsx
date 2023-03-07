import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Renders Hello Liftify!', () => {
    // Arrange
    render(<App />);
    // Act
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello Liftify!');
  });

  it('Renders 404 if path not found', () => {
    render(<MemoryRouter initialEntries={['/bad-path']}></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getByRole('paragraph')).toHaveTextContent('Page not found');
  });
});
