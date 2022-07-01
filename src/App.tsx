import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#efdbce",
      },
      secondary: {
        main: "#175c4c",
      },
    },
  });

  return (
    // BLOCK ELEMENT MODIFIER
    <div className="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
