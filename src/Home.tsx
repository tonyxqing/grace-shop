import React from "react";
import { useTheme } from "@mui/material";
import "./Home.css";
function Home() {
  const theme = useTheme();
  return (
    <div
      className="home"
      style={{
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="home__container"></div>

      <div className="home__row"></div>
    </div>
  );
}

export default Home;
