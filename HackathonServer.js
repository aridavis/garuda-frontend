const app = require("express")();
const hackathonServer = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(hackathonServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Running");
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  socket.on("sendChat", (roomId, message) => {
    io.to(roomId).emit("chatSent", message);
  });
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });

  socket.on("writeCode", (roomId, code, from) => {
    io.to(roomId).emit("writeCode", code, from);
  });

  socket.on("changeLanguage", (roomId, languageId, languageStyle) => {
    io.to(roomId).emit("changeLanguage", languageId, languageStyle);
  });

  socket.on("codeResult", (roomId, status) => {
    io.to(roomId).emit("codeResult", status);
  });

  socket.on("chooseCase", (roomId, data) => {
    io.to(roomId).emit("chooseCase", data);
  });
});

hackathonServer.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
