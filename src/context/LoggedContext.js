import React, { createContext, useContext, useState } from 'react';

const LoggedContext = createContext();

export function useLogged() {
  return useContext(LoggedContext);
}

export function LoggedProvider({ children }) {
  const [logged, setLogged] = useState(false);

  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
}
export default LoggedContext; // N'oublie pas d'exporter le contexte par défaut
