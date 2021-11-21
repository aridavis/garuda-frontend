import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import HomeScreen from "./pages/home/HomeScreen";
import "./App.css";
import MeetingScreen from "./pages/meeting/MeetingScreen";
import { MeetingContextProvider } from "./context/MeetingContext";
import CompanyLoginScreen from "./pages/login/CompanyLoginScreen";
import LogInScreen from "./pages/login/LogInScreen";
import SignInScreen from "./pages/signin/SignInScreen";
import SnackbarUtils from "./utils/SnackbarUtils";
import { useSnackbar } from "notistack";
import JobScreen from "./pages/job/JobScreen";
import ApplicationScreen from "./pages/application/ApplicationScreen";
import QuestionContainer from "./pages/basictest/QuestionContainer";
import ApplicationDetailScreen from "./pages/applicationdetail/ApplicationDetailScreen";
import CourseScreen from "./pages/courses/CourseScreen";
import CertificationScreen from "./pages/certification/CertificationScreen";

const App = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    SnackbarUtils.setSnackBar(enqueueSnackbar, closeSnackbar);
    // eslint-disable-next-line
  }, []);

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
              <Route exact path="/courses" element={<CourseScreen />} />
              <Route
                exact
                path="/certifications"
                element={<CertificationScreen />}
              />
              <Route
                exact
                path="/meeting"
                element={
                  <MeetingContextProvider>
                    <MeetingScreen />
                  </MeetingContextProvider>
                }
              />
              <Route exact path="/job" element={<JobScreen />} />
              <Route
                exact
                path="/application"
                element={<ApplicationScreen />}
              />
              <Route
                exact
                path="/application-detail/:id"
                element={<ApplicationDetailScreen />}
              />

              <Route exact path="/workshop" element={<JobScreen />} />
              <Route
                exact
                path="/aptitude-test"
                element={<QuestionContainer />}
              />
            </Routes>
          </Router>
        </div>
      </LocalizationProvider>
    </SnackbarProvider>
  );
};

export default App;
