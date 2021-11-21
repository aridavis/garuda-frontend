import { TextField } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MeetingContext } from "../../context/MeetingContext";
import { UserContext } from "../../context/UserContext";

export default function ChatBox({ socket, chats }) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const { roomId } = useContext(MeetingContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (roomId !== null) {
      socket.emit("joinRoom", roomId);
    }
  }, [roomId]);

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("sendChat", roomId, { message: message, from: user.id });
    setMessage("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chats]);

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex-1"
        style={{
          height: "calc(100% - 60px)",
          minHeight: "calc(100% - 60px)",
          overflowY: "scroll",
          boxSizing: "border-box",
        }}
      >
        {chats.map((res) =>
          res.from !== user.id ? (
            <div
              className="mr-10 bg-green-800 text-white p-3 my-1"
              style={{
                borderRadius: "10px",
                boxSizing: "border-box",
                width: "88%",
              }}
            >
              <p>{res.message}</p>
            </div>
          ) : (
            <div
              className="w-full ml-10 bg-green-800 text-white p-3 my-1 "
              style={{
                borderRadius: "10px",
                boxSizing: "border-box",
                width: "88%",
              }}
            >
              <p>{res.message}</p>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
