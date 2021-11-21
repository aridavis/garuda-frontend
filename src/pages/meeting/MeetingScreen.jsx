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
const queryString = require("query-string");
const parsed = queryString.parse(window.location.search);

const languages = require("../../json/ProgrammingLanguages.json");

const socket = io(Constant.SOCKET_URL);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MeetingScreen() {
  const { user } = useContext(UserContext);
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
    CodeController.submit(question.id, selectedLanguage, code).then((res) => {
      socket.emit("codeResult", roomId, res.data.content.result);
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Top nav*/}
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
        {/* Logo area */}
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <a
            href="/"
            className="flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
          >
            <img
              className="h-8 w-auto"
              src="/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </a>
        </div>

        {/* Desktop nav area */}
        <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search"
                className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
            <nav aria-label="Global" className="flex space-x-10">
              <a href="/" className="text-sm font-medium text-gray-900">
                Inboxes
              </a>
              <a href="/" className="text-sm font-medium text-gray-900">
                Reporting
              </a>
              <a href="/" className="text-sm font-medium text-gray-900">
                Settings
              </a>
            </nav>
            <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <a
                  href="/"
                  className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </span>

              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user !== null && user.imageUrl}
                        alt=""
                      />
                    </Menu.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign Out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </header>

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
              <div className="w-full py-3 flex">
                <span>{result}</span>
                {user !== null && user.role_id === 1 && (
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                )}
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
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
