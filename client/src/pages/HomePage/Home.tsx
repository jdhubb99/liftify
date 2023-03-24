import { useEffect } from 'react';
import { useExerciseContext } from '../../hooks/useExerciseContext';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import ExerciseForm from '../../components/ExerciseForm/ExerciseForm';
import type { Exercise } from '../../types/Exercise';
import './Home.css';

const Home: React.FC = () => {
  const { exercises, dispatch } = useExerciseContext();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/exercises');
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: 'GET_EXERCISES', payload: data });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchExercises();
  }, []);

  return (
    <>
      <h1>Exercises</h1>
      <div className="home">
        <div className="exercises">
          {exercises && exercises.length > 0 ? (
            exercises.map((exercise: Exercise) => (
              <ExerciseCard key={exercise._id} exercise={exercise} />
            ))
          ) : (
            <p>No exercises found</p>
          )}
        </div>
        <ExerciseForm />
      </div>
    </>
  );
};

export default Home;
