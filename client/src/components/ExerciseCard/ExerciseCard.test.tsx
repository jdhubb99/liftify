import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Exercise } from '../../types/Exercise';
import ExerciseCard from './ExerciseCard';

const testExercise: Exercise = {
  _id: 123,
  name: 'Test Exercise',
  weight: 100,
  reps: 10,
  createdAt: '2023-03-21T00:19:33.274+00:00',
  updatedAt: '2023-03-21T02:09:19.608+00:00',
};

describe('Exercise Card', () => {
  it('Displays the exercise title', () => {
    render(<ExerciseCard exercise={testExercise} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Test Exercise'
    );
  });

  it('Displays the exercise weight', () => {
    render(<ExerciseCard exercise={testExercise} />);
    const weightLabel = screen.getByText('Weight (lbs):');
    const weightValue = weightLabel.nextSibling as HTMLElement;
    expect(weightValue.textContent).toBe('100');
  });

  it('Displays the exercise reps', () => {
    render(<ExerciseCard exercise={testExercise} />);
    const repsLabel = screen.getByText('Reps:');
    const repsValue = repsLabel.nextSibling as HTMLElement;
    expect(repsValue.textContent).toBe('10');
  });

  it('Displays the exercise date', () => {
    render(<ExerciseCard exercise={testExercise} />);
    const date = screen.getByText(/on/);
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent('12:19 AM on Tuesday, March 21');
  });
});
