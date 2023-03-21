import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  // Write good tests for the navbar comoonent
  it('Renders the title', () => {
    // Arrange
    render(
      <MemoryRouter>
        <Navbar title="Liftify" />
      </MemoryRouter>
    );
    // Act
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Liftify');
  });

  it('Renders a link to the home page', () => {
    // Arrange
    render(
      <MemoryRouter>
        <Navbar title="Liftify" />
      </MemoryRouter>
    );
    // Act
    expect(screen.getByRole('link', { name: 'Liftify' })).toHaveAttribute(
      'href',
      '/'
    );
  });
});
