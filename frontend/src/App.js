import React, { useState } from "react";
import { Provider as AlertProvider, transitions, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { ThemeProvider } from "styled-components";
import light from "./theme/themeLight";
import dark from "./theme/themeDark";
import GlobalStyle from "./theme/GlobalStyle";
import Routes from "./routes";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE,
  containerStyle: {
    fontSize: 12
  }
};

export default function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    console.log("Theme:", theme);
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Routes toggleTheme={toggleTheme} />
          <GlobalStyle />
        </AlertProvider>
      </ThemeProvider>
    </>
  );
}
