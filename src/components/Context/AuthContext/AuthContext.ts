import { createContext } from "react";

export interface AuthState {
  id?: string;
  email: string;
  password: string;
}

export interface AuthContextValue extends AuthState {
  login: ( email: string, password: string) => void;
  logout: () => void;
  isAuthenticated:boolean;
}

// Context instance and hook (exported here so this file doesn't export components)
export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
