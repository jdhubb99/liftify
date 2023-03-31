import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import ExerciseForm from './ExerciseForm';

describe('ExerciseForm', () => {
  it('renders form with all fields and a submit button', () => {
    render(<ExerciseForm />);
    expect(screen.getByLabelText(/exercise name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/reps/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/weight/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add exercise/i })
    ).toBeInTheDocument();
  });

  it('renders an error when there is something wrong with the form input', () => {
    render(<ExerciseForm />);
    const submitButton = screen.getByRole('button', { name: /add exercise/i });
    fireEvent.click(submitButton);
    // wait for the error message to appear
    waitFor(() => {
      expect(
        screen.getByText(/All fields need to be filled/i)
      ).toBeInTheDocument();
    });
  });
});
