import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import DefaultMeetingSection from './DefaultMeetingSection';
import LiveCodeMeetingSection from './LiveCodeMeetingSection';
import UserWaitingRoomScreen from './UserWaitingRoomScreen';

function MeetingScreen(props) {
  const { user } = useContext(UserContext);
  const [meetingId, setmeetingId] = useState('')
  const [meetingType, setmeetingType] = useState("liveCode")

  return (
    meetingType === "liveCode" ?
        (<LiveCodeMeetingSection />) :
        (<DefaultMeetingSection />)
  );
}

export default MeetingScreen;