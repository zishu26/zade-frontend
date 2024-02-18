import React, { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

// Function-based component for UserProvider
export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState('zishanansari26@gmail.com'); // Set hardcoded value

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook useUser
export function useUser() {
  return useContext(UserContext);
}
