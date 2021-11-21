import { useContext, useEffect, useState } from "react";
import { CodeEditorEditable } from "react-code-editor-editable";
import "highlight.js/styles/dracula.css";
import { CodeController } from "../../controllers/CodeController";
import VideoCall from "../../components/meeting/VideoCall";
import ChatBox from "../../components/meeting/ChatBox";
import { io } from "socket.io-client";
import { Constant } from "../../constants/Constant";
import MeetingControl from "../../components/meeting/MeetingControl";
import SnackbarUtils from "../../utils/SnackbarUtils";
import { UserContext } from "../../context/UserContext";
import { MeetingContext } from "../../context/MeetingContext";
import { MeetingController } from "../../controllers/MeetingController";

const languages = require("../../json/ProgrammingLanguages.json");

const socket = io(Constant.SOCKET_URL);

function LiveCodeMeetingSection(props) {
  const { user } = useContext(UserContext);
  const { roomId, me, updateVideo } = useContext(MeetingContext);
  const [question, setQuestion] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);
  const [result, setResult] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedLanguageStyle, setselectedLanguageStyle] = useState(
    languages[0].style
  );

  const [code, setCode] = useState("");

  useEffect(() => {
    updateVideo();
  });

  useEffect(() => {
    if (user !== null && user.role_id > 1 && me !== null && roomId !== null) {
      MeetingController.updateUserSocketId(roomId, me);
      CodeController.get().then((res) => {
        setQuestionList(res.data.contents);
      });
    }
  }, [user, me, roomId]);

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

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        {/* Main area */}

        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <div className={`${isChatOpen ? "hidden" : ""} m-auto`}>
              <VideoCall socket={socket} isLiveCode={true} />
            </div>
            <div className={`${isChatOpen ? "" : "hidden"} h-screen`}>
              <ChatBox socket={socket} />
            </div>
          </section>

          <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first w-4/12">
            <div className="h-full relative flex flex-col w-full border-r border-gray-200 bg-gray-100 p-3">
              <div dangerouslySetInnerHTML={{ __html: question.html }} />
            </div>
          </aside>
          <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first w-5/12">
            <div className="h-full relative flex flex-col w-full border-r border-gray-200 bg-gray-100">
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                  setselectedLanguageStyle(
                    languages.filter(
                      (res) => res.id.toString() === e.target.value.toString()
                    )[0].style
                  );
                  socket.emit(
                    "changeLanguage",
                    roomId,
                    e.target.value,
                    languages.filter(
                      (res) => res.id.toString() === e.target.value.toString()
                    )[0].style
                  );
                  setCode("");
                  socket.emit("writeCode", roomId, "", user.id);
                }}
              >
                {languages.map((res) => (
                  <option
                    selected={res.id === selectedLanguage}
                    key={res.id}
                    value={res.id}
                  >
                    {res.name}
                  </option>
                ))}
              </select>
              <CodeEditorEditable
                value={code}
                setValue={(val) => {
                  setCode(val);
                  socket.emit("writeCode", roomId, val, user.id);
                }}
                width="100%"
                height="100vh"
                language={selectedLanguageStyle}
                inlineNumbers
              />
              {user !== null && user.role_id > 1 && (
                <>
                  <select
                    value={selectedQuestionId}
                    onChange={(e) => {
                      setSelectedQuestionId(e.target.value);
                      setSelectedQuestion(
                        questionList.filter(
                          (res) =>
                            res.id.toString() === e.target.value.toString()
                        )[0]
                      );
                    }}
                  >
                    <option value=""></option>
                    {questionList.map((res) => (
                      <option value={res.id}>{res.name}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      socket.emit("chooseCase", roomId, selectedQuestion);
                    }}
                  >
                    Submit
                  </button>
                </>
              )}
              {user !== null && user.id === 1 && (
                <div className="w-full py-3 flex">
                  <span>{result}</span>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </aside>
        </main>
      </div>

      <MeetingControl
        toggleChat={() => {
          setIsChatOpen(!isChatOpen);
        }}
      />
    </div>
  );
}

export default LiveCodeMeetingSection;
