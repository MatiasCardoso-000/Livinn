import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthState } from "./AuthContext";

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthState>({} as AuthState);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user: { email: string; password: string }) => {
    localStorage.setItem("user", JSON.stringify(user.email));
    localStorage.setItem("sessionActive", "true");
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setUser({} as AuthState);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = () => {
      const sessionActive = localStorage.getItem("sessionActive");

      if (!sessionActive) {
        setUser({} as AuthState);
        setIsAuthenticated(false);
        return;
      }
    };
    setIsAuthenticated(true);
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
