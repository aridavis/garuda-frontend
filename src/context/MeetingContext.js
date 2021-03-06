import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { Constant } from "../constants/Constant";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { MeetingController } from "../controllers/MeetingController";

const MeetingContext = createContext();

const socket = io(Constant.SOCKET_URL);

const MeetingContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");
  const [roomId, setRoomId] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (myVideo.current !== undefined) {
          myVideo.current.srcObject = currentStream;
        }
      });
    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  useEffect(() => {
    if (user !== null && me !== "" && user.role_id !== 1 && roomId !== "") {
      MeetingController.updateUserSocketId(roomId, me);
    }
  }, [me, user, roomId]);

  useEffect(() => {
    setRoomId(id);
  }, [id]);

  const updateVideo = () => {
    if (myVideo.current !== undefined) {
      myVideo.current.srcObject = stream;
    }
  };

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <MeetingContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        roomId,
        updateVideo,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export { MeetingContextProvider, MeetingContext };
