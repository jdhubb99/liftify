import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Renders Hello Liftify!', () => {
    // Arrange
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Act
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Hello Liftify!',
      })
    ).toBeInTheDocument();
  });

  it('Renders 404 if path not found', () => {
    // Arrange
    // can't use <App /> because it uses BrowserRouter
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <App />
      </MemoryRouter>
    );
    // Act
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '404',
      })
    ).toBeInTheDocument();
  });

  it('Renders the navbar', () => {
    // Arrange
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Act
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Liftify',
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
