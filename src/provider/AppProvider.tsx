import { useReducer, useContext, ReactNode } from "react";
import AppContext, { ContextProps } from "./AppContext";
import { User } from "types";

import { TEST_USER } from "testing/test-user"; // initiate app with mocked-up logged-in user

type Actions = { type: "AUTH_LOG_IN"; value: User };

const initialState = {};

const reducer = (state: { user: User | null }, action: Actions) => {
  switch (action.type) {
    case "AUTH_LOG_IN":
      return {
        ...state,
        user: action.value,
      };

    default:
      throw new Error();
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => {
    return { ...state, user: TEST_USER };
  });

  const login = (value: User) => dispatch({ type: "AUTH_LOG_IN", value });

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext) as ContextProps;
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext };

export default AppProvider;
