import { ExerciseContext } from '../context/ExerciseContext';
import { useContext } from 'react';

export const useExerciseContext = () => {
  const context = useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error(
      'useExerciseContext must be used within an ExerciseContextProvider'
    );
  }
  return context;
};
