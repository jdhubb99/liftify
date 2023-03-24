import { useState } from 'react';
import type { Exercise } from '../../types/Exercise';
import './ExerciseForm.css';

const ExerciseForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [reps, setReps] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newExercise: Exercise = {
        name,
        reps,
        weight,
      };
      const response = await fetch('http://localhost:4000/api/exercises', {
        method: 'POST',
        body: JSON.stringify(newExercise),
        headers: { 'Content-Type': 'application/json' },
      });
      const jsonResponse = await response.json();

      if (!response.ok) {
        setError(jsonResponse.error);
      }

      setName('');
      setReps(0);
      setWeight(0);
      setError(null);
      console.log('Exercise successfully added', jsonResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <h2 className="exercise-form__title">Add a New Exercise</h2>
      <label htmlFor="exercise-name" className="exercise-form__label">
        Exercise Name:
      </label>
      <input
        type="text"
        id="exercise-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="exercise-reps" className="exercise-form__label">
        Reps:
      </label>
      <input
        type="number"
        id="exercise-reps"
        value={reps === 0 ? '' : reps}
        onChange={(e) => setReps(Number(e.target.value))}
      />

      <label htmlFor="exercise-weight" className="exercise-form__label">
        Weight (lbs):
      </label>
      <input
        type="number"
        id="exercise-weight"
        value={weight === 0 ? '' : weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />

      <button className="exercise-form__button">Add Exercise</button>

      {error && <p className="exercise-form__error">{error}</p>}
    </form>
  );
};

export default ExerciseForm;
