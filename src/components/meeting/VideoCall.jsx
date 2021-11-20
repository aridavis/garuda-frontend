import React, { useContext, useEffect, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MeetingContext } from "../../context/MeetingContext";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "60%",
    display: "block !important",
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
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const VideoCall = () => {
  const [target, setTarget] = useState("");
  const {
    name,
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

  useEffect(() => {}, []);

  return (
    <Grid container className={classes.gridContainer}>
      {callAccepted && !callEnded ? (
        <Grid item xs={12} className={classes.videoContainer}>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          className={classes.videoContainer}
          style={{ backgroundColor: "grey" }}
        >
          {call.isReceivingCall && !callAccepted && (
            <div style={{ display: "flex", padding: "10px" }}>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          )}
        </Grid>
      )}

      {stream && (
        <Grid item xs={12} className={classes.videoContainer}>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
          <div className="w-full bg-gray-400 absolute">{me}</div>
        </Grid>
      )}
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
    </Grid>
  );
};

export default VideoCall;
