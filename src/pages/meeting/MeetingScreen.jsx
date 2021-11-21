<<<<<<< HEAD
import { Fragment, useContext, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { CodeEditorEditable } from "react-code-editor-editable";
import "highlight.js/styles/dracula.css";
import { BellIcon } from "@heroicons/react/outline";
import { CodeController } from "../../controllers/CodeController";
import VideoCall from "../../components/meeting/VideoCall";
import ChatBox from "../../components/meeting/ChatBox";
import { io } from "socket.io-client";
import { Constant } from "../../constants/Constant";
import { UserContext } from "../../context/UserContext";
import { MeetingContext } from "../../context/MeetingContext";
import SnackbarUtils from "../../utils/SnackbarUtils";
const queryString = require("query-string");
const parsed = queryString.parse(window.location.search);
=======
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import DefaultMeetingSection from './DefaultMeetingSection';
import LiveCodeMeetingSection from './LiveCodeMeetingSection';
import UserWaitingRoomScreen from './UserWaitingRoomScreen';
>>>>>>> 17724465418e7017ecda2ea98ac5b246e3dc2b6c

function MeetingScreen(props) {
  const { user } = useContext(UserContext);
<<<<<<< HEAD
  const { roomId } = useContext(MeetingContext);
  const [question, setQuestion] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);
  const [result, setResult] = useState("");
  const [selectedLanguageStyle, setselectedLanguageStyle] = useState(
    languages[0].style
  );

  const [code, setCode] = useState("");

  useEffect(() => {
    if (user !== null && user.role_id > 1) {
      CodeController.get().then((res) => {
        setQuestionList(res.data.contents);
      });
    }
  }, [user]);

  useEffect(() => {
    socket.on("writeCode", (code, from) => {
      if (from.toString() !== user.id.toString()) {
        setCode(code);
      }
    });

    socket.on("codeResult", (result) => {
      setResult(result);
    });

    socket.on("chooseCase", (data) => {
      setQuestion(data);
    });

    socket.on("removeCodeQuestion", (id) => {
      setQuestion({});
      setCode("");
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    socket.on("changeLanguage", (languageId, languageStyle) => {
      setSelectedLanguage(languageId);
      setselectedLanguageStyle(languageStyle);
    });
  }, [selectedLanguage]);

  const onSubmit = () => {
    CodeController.submit(question.id, selectedLanguage, code)
      .then((res) => {
        socket.emit("codeResult", roomId, res.data.content.result);
      })
      .catch((err) => {
        SnackbarUtils.error("There is an error");
      });
  };
=======
  const [meetingId, setmeetingId] = useState('')
  const [meetingType, setmeetingType] = useState("liveCode")
>>>>>>> 17724465418e7017ecda2ea98ac5b246e3dc2b6c

  return (
    meetingId === "" && (user === null || user.role_id === 1) ?
      (<UserWaitingRoomScreen />) :
      meetingType === "liveCode" ?
        (<LiveCodeMeetingSection />) :
        (<DefaultMeetingSection />)
  );
}

export default MeetingScreen;