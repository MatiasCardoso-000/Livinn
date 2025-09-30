import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthState } from "./AuthContext";

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthState>({} as AuthState);

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (user: { email: string; password: string }) => {
    setUser(user);
    setIsAuthenticated(true)
  };

  const logout = () => {
    setUser({} as AuthState)
    setIsAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ ...user, login, logout,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
