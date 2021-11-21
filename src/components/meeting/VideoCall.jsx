import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MeetingContext } from "../../context/MeetingContext";
import { UserContext } from "../../context/UserContext";
import { MeetingController } from "../../controllers/MeetingController";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "60%",
    display: "block !important",
    boxSizing: "borsder-box",
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
    aspectRatio: "16/9",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const VideoCall = (props) => {
  console.log(props);
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

  const { id } = useParams();
  const { user } = useContext(UserContext);

  const [meetingData, setMeetingData] = useState({});

  useEffect(() => {
    MeetingController.getMeetingDetail(id).then((res) => {
      if (
        id !== null &&
        id !== undefined &&
        user !== null &&
        user.role_id === 1
      ) {
        callUser(res.data.content.socket_id);
      }
    });
  }, [user]);

  useEffect(() => {}, []);

  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8 m-auto ${
        props.isLiveCode && "lg:flex flex-col"
      }`}
    >
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
        ></div>
      )}

      {stream && (
        <div className={`${classes.videoContainer} rounded-xl overflow-hidden`}>
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
      {call.isReceivingCall && !callAccepted && (
        <Button variant="contained" color="primary" onClick={answerCall}>
          Answer
        </Button>
      )}
    </div>
  );
};

export default VideoCall;
