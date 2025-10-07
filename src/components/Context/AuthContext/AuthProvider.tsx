import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthState } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const [user, setUser] = useState<AuthState>({
    email: "JohnDoe@JohnDoe.com",
    password: "123456",
  });

  const login = (email: string, password: string) => {
    const errorsLogin: string[] = [];
    if (user.email !== email) {
      errorsLogin.push("Invalid Email");
    }
    if (user.password !== password) {
      errorsLogin.push("Invalid Password");
    }

    if (errorsLogin.length > 0) {
      let finalMessageError = "";

      if (errorsLogin.length === 2) {
        finalMessageError = "Invalid credentials";
      } else {
        finalMessageError = errorsLogin[0];
      }

      setErrors([finalMessageError]);
      setIsAuthenticated(false);
    } else {
      localStorage.setItem("user", JSON.stringify(email));
      localStorage.setItem("sessionActive", "true");
      setIsAuthenticated(true);
      setErrors([]);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionActive");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = () => {
      const sessionActive = localStorage.getItem("sessionActive");

      if (!sessionActive) {
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
