import { createContext, useReducer } from 'react';

export const AuthContext = createContext({ user: null });

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  console.log('Auth Context State: ', state);

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};
