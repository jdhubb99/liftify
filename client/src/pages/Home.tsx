import { useState, useEffect } from 'react';
import { Workout } from '../types/Workout';

const Home: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts');
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        <h1>Workouts</h1>
        {workouts &&
          workouts.map((workout) => (
            <div key={workout._id}>
              <h3>{workout.title}</h3>
              <p>{workout.reps}</p>
              <p>{workout.weight}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
