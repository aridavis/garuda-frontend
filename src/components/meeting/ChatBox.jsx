import { Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MeetingContext } from "../../context/MeetingContext";
import { io } from "socket.io-client";
import { Constant } from "../../constants/Constant";

export default function ChatBox({ socket }) {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("joinRoom", 1);
  }, []);

  useEffect(() => {
    socket.on("chatSent", (message) => {
      let temp = chats;
      temp.push(message);
      setChats([...temp]);
    });
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
    <Grid container style={{ height: "40%" }}>
      <Grid
        item
        xs={12}
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
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
}
