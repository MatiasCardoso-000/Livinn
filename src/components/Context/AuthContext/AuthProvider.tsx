import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthState } from "./AuthContext";

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthState>({
    email: "JohnDoe@JohnDoe.com",
    password: "1234",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const login = (email: string, password: string) => {
    if (user.email !== email || user.password !== password) {
      setErrors(["Invalid email"]);
      setErrors(["Invalid password"]);
      setUser({} as AuthState);
      setIsAuthenticated(false);
    } else {
      localStorage.setItem("user", JSON.stringify(email));
      localStorage.setItem("sessionActive", "true");
      setIsAuthenticated(true);
      setUser(user);
      setErrors([]);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionActive");
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
    <AuthContext.Provider
      value={{ ...user, login, logout, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
