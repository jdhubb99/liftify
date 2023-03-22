// TODO write tests for WorkoutCard
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Workout } from '../../types/Workout';
import WorkoutCard from './WorkoutCard';

const testWorkout: Workout = {
  _id: 123,
  title: 'Test Workout',
  weight: 100,
  reps: 10,
  createdAt: '2023-03-21T00:19:33.274+00:00',
  updatedAt: '2023-03-21T02:09:19.608+00:00',
};

describe('WorkoutCard', () => {
  it('Displays the workout title', () => {
    render(<WorkoutCard workout={testWorkout} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Test Workout'
    );
  });

  it('Displays the workout weight', () => {
    render(<WorkoutCard workout={testWorkout} />);
    const weightLabel = screen.getByText('Weight (lbs):');
    const weightValue = weightLabel.nextSibling as HTMLElement;
    expect(weightValue.textContent).toBe('100');
  });

  it('Displays the workout reps', () => {
    render(<WorkoutCard workout={testWorkout} />);
    const repsLabel = screen.getByText('Reps:');
    const repsValue = repsLabel.nextSibling as HTMLElement;
    expect(repsValue.textContent).toBe('10');
  });

  it('Displays the workout date', () => {
    render(<WorkoutCard workout={testWorkout} />);
    const date = screen.getByText(/on/);
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent('12:19 AM on Tuesday, March 21');
  });
});
