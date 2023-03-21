import { Workout } from '../../types/Workout';
import './WorkoutCard.css';

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  function formatDate(date: string) {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = newDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return `${formattedTime} on ${formattedDate}`;
  }

  return (
    <div className="workout-card">
      <h3>{workout.title}</h3>
      <p>
        <strong>Weight (lbs): </strong>
        {workout.weight}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDate(workout.createdAt)}</p>
    </div>
  );
};

export default WorkoutCard;
