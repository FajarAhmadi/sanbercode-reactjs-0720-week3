import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./tugas15/Routes";
import { ThemeProvider } from "./tugas15/ThemeContext";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
