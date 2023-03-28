import { Exercise } from '../../types/Exercise';
import './ExerciseCard.css';
import { useExerciseContext } from '../../hooks/useExerciseContext';

interface Props {
  exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const { dispatch } = useExerciseContext();

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
  
  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/exercises/' + exercise._id, {
      method: 'DELETE'
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_EXERCISE', payload: data });
    }
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
        <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ExerciseCard;
