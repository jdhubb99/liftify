import { Exercise } from '../../types/Exercise';
import './ExerciseCard.css';
import { useExerciseContext } from '../../hooks/useExerciseContext';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

interface Props {
  exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const { dispatch } = useExerciseContext();
  dayjs.extend(relativeTime);

  const handleClick = async () => {
    const response = await fetch(
      'http://localhost:4000/api/exercises/' + exercise._id,
      {
        method: 'delete',
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'delete_exercise', payload: data });
    }
  };

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
        {Boolean(exercise.createdAt)
          ? dayjs(exercise.createdAt).fromNow()
          : exercise.createdAt}
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ExerciseCard;
