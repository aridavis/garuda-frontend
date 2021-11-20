import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import HomeScreen from './pages/HomePage/HomeScreen';
import './App.css';

export class App extends Component {
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div>
            <Router>
              <Routes>
                <Route exact path="/" element={<HomeScreen />}></Route>
                {/* <Route exact path="/login" component={ }></Route> */}
              </Routes>
            </Router>
          </div>
        </LocalizationProvider>
      </SnackbarProvider>
    );
  }
}

export default App;
