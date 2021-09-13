import { createContext } from "react";
import { User } from "types";

export type ContextProps = {
  user: User | null;
  login: (value: User) => void;
  logout: () => void;
};

const AppContext = createContext<Partial<ContextProps>>({});

export default AppContext;
