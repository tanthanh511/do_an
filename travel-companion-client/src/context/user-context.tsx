import React, { ReactNode, createContext, useEffect, useState } from "react";

// @function  UserProvider
// Create function to provide UserContext

interface User {
  email: string;
  auth: boolean;
}
interface UserContextType {
  user: User;
  loginContext: (email: string, token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
// const UserContext = createContext({ name: '', auth: false });

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ email: "", auth: false });

  const loginContext = (email: string, token: string) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser((user) => ({
      email: "",
      auth: false,
    }));
  };
  
  useEffect(() => {
    // Xóa token khi component unmount
    return () => {
      localStorage.removeItem("token");
     
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );

};

export { UserContext, UserProvider };
