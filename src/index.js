import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/UserContext";
import { SnackbarProvider } from "notistack";
import { Button } from "@mui/material";
import SnackbarUtils from "./utils/SnackbarUtils";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <SnackbarProvider
        maxSnack={1}
        action={(key) => {
          return (
            <Button onClick={() => SnackbarUtils.closeSnackbar(key)}>
              Dismiss
            </Button>
          );
        }}
      >
        <App />
      </SnackbarProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
