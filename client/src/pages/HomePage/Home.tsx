import { useState, useEffect } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import ExerciseForm from '../../components/ExerciseForm/ExerciseForm';
import { Exercise } from '../../types/Exercise';
import './Home.css';

const Home: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/exercises');
        const data = await response.json();
        if (response.ok) {
          setExercises(data);
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
          {exercises &&
            exercises.map((exercise) => (
              <ExerciseCard key={exercise._id} exercise={exercise} />
            ))}
        </div>
        <ExerciseForm />
      </div>
    </>
  );
};

export default Home;
