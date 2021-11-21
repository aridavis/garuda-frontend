import { useContext, useEffect, useState } from "react";
import "highlight.js/styles/dracula.css";
import VideoCall from "../../components/meeting/VideoCall";
import ChatBox from "../../components/meeting/ChatBox";
import { io } from "socket.io-client";
import { Constant } from "../../constants/Constant";
import MeetingControl from "../../components/meeting/MeetingControl";
import { Transition } from "@headlessui/react";
import { MeetingContext } from "../../context/MeetingContext";

const socket = io(Constant.SOCKET_URL);

function DefaultMeetingSection(props) {
  const [isChatOpen, setisChatOpen] = useState(false);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on("chatSent", (message) => {
      let temp = chats;
      temp.push(message);
      setChats([...temp]);
    });
    // eslint-disable-next-line
  }, [socket]);

  const { updateVideo } = useContext(MeetingContext);

  useEffect(() => {
    updateVideo();
  });

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full p-2 flex flex-row"
          >
            <VideoCall socket={socket} />
            <Transition show={isChatOpen}>
              <Transition.Child
                enter="transition-all ease-linear duration-300"
                enterFrom="opacity-0 w-0"
                enterTo="opacity-100 w-96"
                leave="transition-all ease-linear duration-300"
                leaveFrom="opacity-100 w-96"
                leaveTo="opacity-0 w-0"
                className="flex h-full"
              >
                <div className="h-full w-96 bg-white">
                  <ChatBox socket={socket} chats={chats} />
                </div>
              </Transition.Child>
            </Transition>
          </section>
        </main>
      </div>
      <MeetingControl
        toggleChat={() => {
          setisChatOpen(!isChatOpen);
        }}
      />
    </div>
  );
}

export default DefaultMeetingSection;
