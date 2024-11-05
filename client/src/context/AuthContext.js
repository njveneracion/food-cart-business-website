import React, { createContext, useState, useEffect } from "react";
import { getToken } from "../services/authService.js";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to indicate loading status

  useEffect(() => {
    const token = getToken(); // Retrieve token
    if (token) {
      // Decode the JWT payload to get user info (this assumes your token is a JWT)
      const userData = JSON.parse(atob(token.split(".")[1])); // Decode the payload part of the JWT
      setUser(userData); // Set user state based on token
    }
    setLoading(false); // Set loading to false after checking token
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
