import { useState, useEffect } from 'react';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';
import { Workout } from '../../types/Workout';
import './Home.css';

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
    <>
      <h1>Workouts</h1>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutCard key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
