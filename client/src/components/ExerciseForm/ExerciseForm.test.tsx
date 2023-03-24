import { render, screen } from '@testing-library/react';
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
});
