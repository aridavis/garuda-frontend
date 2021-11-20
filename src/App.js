import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import HomeScreen from "./pages/HomePage/HomeScreen";
import "./App.css";
import MeetingScreen from "./pages/meeting/MeetingScreen";

export class App extends Component {
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div>
            <Router>
              <Routes>
                <Route exact path="/meeting" element={<MeetingScreen />} />
                <Route exact path="/" element={<HomeScreen />} />
              </Routes>
            </Router>
          </div>
        </LocalizationProvider>
      </SnackbarProvider>
    );
  }
}

export default App;
