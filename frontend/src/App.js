import React from "react";
import { Provider as AlertProvider, transitions, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
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
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Routes />
        <GlobalStyle />
      </AlertProvider>
    </>
  );
}
