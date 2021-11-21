import { useContext, useEffect, useState } from "react";
import "highlight.js/styles/dracula.css";

import DefaultMeetingSection from "./DefaultMeetingSection";
import LiveCodeMeetingSection from "./LiveCodeMeetingSection";
import UserWaitingRoomScreen from "./UserWaitingRoomScreen";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import { MeetingController } from "../../controllers/MeetingController";

function MeetingScreen(props) {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [meetingId, setmeetingId] = useState("");
  const [meetingType, setmeetingType] = useState(0);
  const [meetingSocketId, setMeetingSocketId] = useState(null);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      setmeetingId(id);
      MeetingController.getMeetingDetail(id).then((res) => {
        setmeetingType(res.data.content.meeting_type_id);
        setMeetingSocketId(res.data.content.socket_id);
      });
    }
  }, [id]);

  return user !== null && user !== undefined ? (
    <>
      {user.role_id !== 1 && meetingType === 1 ? (
        <DefaultMeetingSection />
      ) : user.role_id !== 1 && meetingType !== 2 ? (
        <LiveCodeMeetingSection />
      ) : user.role_id === 1 && meetingSocketId === null ? (
        <UserWaitingRoomScreen />
      ) : user.role_id === 1 && meetingType === 1 ? (
        <DefaultMeetingSection />
      ) : (
        <LiveCodeMeetingSection />
      )}
    </>
  ) : (
    <>
      <UserWaitingRoomScreen />
    </>
  );
}

export default MeetingScreen;
