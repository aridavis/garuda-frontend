import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";
import { MeetingController } from "../../controllers/MeetingController";
import DefaultMeetingSection from "./DefaultMeetingSection";
import LiveCodeMeetingSection from "./LiveCodeMeetingSection";
import UserWaitingRoomScreen from "./UserWaitingRoomScreen";

function MeetingScreen(props) {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [meetingType, setmeetingType] = useState(0);
  const [meetingSocketId, setMeetingSocketId] = useState(null);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      MeetingController.getMeetingDetail(id).then((res) => {
        setmeetingType(res.data.content.meeting_type_id);
        setMeetingSocketId(res.data.content.socket_id);
      });
    }
  }, [id]);

  return user === null ? (
    <UserWaitingRoomScreen />
  ) : meetingSocketId === "" && (user === null || user.role_id === 1) ? (
    <UserWaitingRoomScreen />
  ) : meetingType === 2 ? (
    <LiveCodeMeetingSection />
  ) : (
    <DefaultMeetingSection />
  );
}

export default MeetingScreen;
