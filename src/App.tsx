import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppProvider from "./context/AppProvider";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </React.Fragment>
  );
}

export default App;
