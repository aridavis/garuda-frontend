import React, { useContext, useEffect, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MeetingContext } from "../../context/MeetingContext";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "60%",
    display: "block !important",
    boxSizing: 'borsder-box'
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    width: "100%",
    height: "100px",
    maxHeight: "30%",
  },
  video: {
    height: "100% !important",
    width: "100%",
    objectFit: "cover",
  },
  videoContainer: {
    position: "relative",
    // height: "96px",
    aspectRatio: "16/9",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const VideoCall = () => {
  const [target, setTarget] = useState("");
  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    answerCall,
    me,
    callUser,
  } = useContext(MeetingContext);
  const classes = useStyles();

  useEffect(() => { }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8 m-auto">
      {callAccepted && !callEnded ? (
        <div className={`${classes.videoContainer} rounded-xl`}>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </div>
      ) : (
        <div
          className={`${classes.videoContainer} rounded-xl`}
          style={{ backgroundColor: "grey" }}
        >
          {call.isReceivingCall && !callAccepted && (
            <div style={{ display: "flex", padding: "10px" }}>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          )}
        </div>
      )}

      {stream && (
        <div
          className={`${classes.videoContainer} rounded-xl overflow-hidden`}>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
          <div className="w-full bg-gray-400 absolute">{me}</div>
        </div>
      )}
      <div className="flex justify-center flex-col">
        <TextField
          value={target}
          onChange={(e) => setTarget(e.currentTarget.value)}
        />
        <Button
          onClick={() => {
            callUser(target);
          }}
        >
          join
        </Button>
      </div>
    </div>
  );
};

export default VideoCall;
