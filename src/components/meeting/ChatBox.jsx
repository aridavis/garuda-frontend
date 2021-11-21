import { div, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function ChatBox({ socket }) {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("joinRoom", 1);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("chatSent", (message) => {
      let temp = chats;
      temp.push(message);
      setChats([...temp]);
    });
    // eslint-disable-next-line
  }, [socket]);

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("sendChat", 1, message);
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
        }}
      >
        {chats.map((res) => (
          <p>{res}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div item xs={12}>
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
