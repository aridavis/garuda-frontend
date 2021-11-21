import { Fragment, useEffect, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { CodeEditorEditable } from "react-code-editor-editable";
import "highlight.js/styles/dracula.css";
import { BellIcon, CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import { CodeController } from "../../controllers/CodeController";
import VideoCall from "../../components/meeting/VideoCall";
import ChatBox from "../../components/meeting/ChatBox";
import { io } from "socket.io-client";
import { Constant } from "../../constants/Constant";
import MeetingControl from "../../components/meeting/MeetingControl";

const queryString = require("query-string");
const parsed = queryString.parse(window.location.search);
const languages = require("../../json/ProgrammingLanguages.json");
const socket = io(Constant.SOCKET_URL);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LiveCodeMeetingSection(props) {
  const [question, setQuestion] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);
  const [result, setResult] = useState("success");
  const [isChatOpen, setisChatOpen] = useState(false)
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
    CodeController.submit(question.id, selectedLanguage, code).then((res) => {
      socket.emit("codeResult", 1, res.data.content.result);
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full p-2 flex flex-col"
          >
            <div className={`${!isChatOpen ? "hidden" : ""} m-auto`}>
              <VideoCall socket={socket} />
            </div>
            <div className={`${!isChatOpen ? "" : "hidden"} h-screen`}>
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
              <div className="flex py-2 justify-between">
                <Listbox value={selectedLanguage} onChange={(e) => {
                  setSelectedLanguage(e);
                  setselectedLanguageStyle(
                    languages.filter(
                      (res) => res.id.toString() === e.toString()
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
                  setResult("");
                  socket.emit("writeCode", 1, "", parsed.id);
                }}>
                  {({ open }) => (
                    <>
                      <div className="relative">
                        <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                          <span className="block truncate">{languages.find((lang) => lang.id === selectedLanguage).name}</span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options
                            static
                            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                          >
                            {languages.map((lang, idx) => (
                              <Listbox.Option
                                key={"language" + idx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'text-white bg-primary' : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                  )
                                }
                                value={lang.id}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                      {lang.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-customwhite bg-fourth hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fourth"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
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
              <div className="w-full py-3 flex justify-center">
                {result !== "" &&
                  <div
                    className={classNames(
                      result === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                      'flex items px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 item-center'
                    )}
                  >
                    <span className="flex flex-row item-center">{result}</span>
                  </div>
                }
              </div>
            </div>
          </aside>
        </main>
      </div>
      <MeetingControl toggleChat={() => {
        setisChatOpen(!isChatOpen)
      }} />
    </div>
  )
}

export default LiveCodeMeetingSection;