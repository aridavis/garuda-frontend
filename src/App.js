import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import HomeScreen from "./pages/home/HomeScreen";
import "./App.css";
import MeetingScreen from "./pages/meeting/MeetingScreen";
import CompanyLoginScreen from "./pages/login/CompanyLoginScreen";
import LogInScreen from "./pages/login/LogInScreen";
import SignInScreen from "./pages/signin/SignInScreen";

export class App extends Component {
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div>
            <Router>
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/co/login" element={<CompanyLoginScreen />} />
                <Route exact path="/login" element={<LogInScreen />} />
                <Route exact path="/signin" element={<SignInScreen />} />
                <Route exact path="/meeting" element={<MeetingScreen />} />
              </Routes>
            </Router>
          </div>
        </LocalizationProvider>
      </SnackbarProvider>
    );
  }
}

export default App;
