import { Fragment, useEffect, useState } from "react";
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
import MeetingControl from "../../components/meeting/MeetingControl";
import SnackbarUtils from "../../utils/SnackbarUtils";

const queryString = require("query-string");
const parsed = queryString.parse(window.location.search);

const languages = require("../../json/ProgrammingLanguages.json");

const socket = io(Constant.SOCKET_URL);

function LiveCodeMeetingSection(props) {
  const [question, setQuestion] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);
  const [result, setResult] = useState("");
  const [selectedLanguageStyle, setselectedLanguageStyle] = useState(
    languages[0].style
  );

  const [code, setCode] = useState("");

  useEffect(() => {
    CodeController.show(1).then((res) => {
      setQuestion(res.data.content);
    });
  }, []);

  useEffect(() => {
    socket.on("writeCode", (code, from) => {
      if (from.toString() !== parsed.id.toString()) {
        console.log(from);
        console.log(parsed.id);
        setCode(code);
      }
    });

    socket.on("codeResult", (result) => {
      setResult(result);
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
        socket.emit("codeResult", 1, res.data.content.result);
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
            <VideoCall socket={socket} />

            <ChatBox socket={socket} />
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
                    1,
                    e.target.value,
                    languages.filter(
                      (res) => res.id.toString() === e.target.value.toString()
                    )[0].style
                  );
                  setCode("");
                  socket.emit("writeCode", 1, "", parsed.id);
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
                  socket.emit("writeCode", 1, val, parsed.id);
                }}
                width="100%"
                height="100vh"
                language={selectedLanguageStyle}
                inlineNumbers
              />
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
            </div>
          </aside>
        </main>
      </div>

      <MeetingControl />
    </div>
  );
}

export default LiveCodeMeetingSection;
