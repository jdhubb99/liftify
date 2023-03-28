import { createContext, useReducer, type ReactNode } from 'react';
import { Exercise } from '../types/Exercise';

export const ExerciseContext = createContext({
  exercises: [] as Exercise[],
  dispatch: (action: any) => {},
});

export const exerciseReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return { exercises: action.payload };
    case 'SET_EXERCISE':
      return { exercises: [action.payload, ...state.exercises] };
    case 'DELETE_EXERCISE':
      return { exercises: state.exercises.filter((exercise: Exercise) => exercise._id !== action.payload._id) };
    default:
      return state;
  }
};

type Props = {
  children?: ReactNode;
};

export const ExerciseContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(exerciseReducer, []);
  return (
    <ExerciseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};
