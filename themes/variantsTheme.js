import React from "react";

const variants = {
  primary: {
    backgroundColor: "#cce5ff",
    borderColor: "#b8daff",
    color: "#004085",
  },
  secondary: {
    backgroundColor: "#e2e3e5",
    borderColor: "#d6d8db",
    color: "#383d41",
  },
  success: {
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    color: "#155724",
  },
  danger: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    color: "#721c24",
  },
  warning: {
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba",
    color: "#856404",
  },
  info: {
    backgroundColor: "#d1ecf1",
    borderColor: "#bee5eb",
    color: "#0c5460",
  },
  light: {
    backgroundColor: "#fefefe",
    borderColor: "#fdfdfe",
    color: "#818182",
  },
  dark: {
    backgroundColor: "#d6d8d9",
    borderColor: "#c6c8ca",
    color: "#1b1e21",
  },
};

const ThemeContext = React.createContext(variants);

export default ThemeContext;
