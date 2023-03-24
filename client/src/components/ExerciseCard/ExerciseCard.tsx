import { Exercise } from '../../types/Exercise';
import './ExerciseCard.css';

interface Props {
  exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  function formatDate(date: string | number | Date) {
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
    <div className="exercise-card">
      <h3>{exercise.name}</h3>
      <p>
        <strong>Weight (lbs): </strong>
        {exercise.weight}
      </p>
      <p>
        <strong>Reps: </strong>
        {exercise.reps}
      </p>
      <p>
        {exercise.createdAt
          ? formatDate(exercise.createdAt)
          : exercise.createdAt}
      </p>
    </div>
  );
};

export default ExerciseCard;
