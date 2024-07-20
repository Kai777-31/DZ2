import React, { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";

const USER = { firstName: "Kailex", lastName: "Kai" };

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(undefined);

  const authUser = useCallback(() => {
    setUser((prevState) => (prevState === USER ? undefined : USER));
  }, []);

  return (
    <UserContext.Provider value={{ value: user, authUser }}>
      {children}
    </UserContext.Provider>
  );
}