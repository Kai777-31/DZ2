import React, { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(
    () => setTheme((prevState) => (prevState === "light" ? "dark" : "light")),
    []
  );

  return (
    <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}