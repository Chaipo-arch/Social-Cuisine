import React, { createContext, useContext, useState } from 'react';

const LoggedContext = createContext();

export function useLogged() {
  return useContext(LoggedContext);
}

export function LoggedProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [userID, setUserID] = useState(null); // Ajout de l'ID de l'utilisateur

  return (
    <LoggedContext.Provider value={{ logged, setLogged , userID, setUserID }}>
      {children}
    </LoggedContext.Provider>
  );
}
export default LoggedContext; // N'oublie pas d'exporter le contexte par défaut
