import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import MeetingCompanySection from "./MeetingCompanySection";
import MeetingUserSection from "./MeetingUserSection";

const MeetingSection = (props) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {props.step !== undefined && user !== null && user.role_id === 1 ? (
        <MeetingUserSection
          step={props.step}
          applicationProcessId={props.step.step.id}
        />
      ) : (
        <MeetingCompanySection
          step={props.step}
          applicationProcessId={props.step.step.id}
        />
      )}
    </div>
  );
};
export default MeetingSection;
