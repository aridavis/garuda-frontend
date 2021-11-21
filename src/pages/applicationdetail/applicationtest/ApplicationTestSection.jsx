import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import ApplicationTestHRSection from "./ApplicationTestHRSection";
import ApplicationTestUserSection from "./ApplicationTestUserSection";

const ApplicationTestSection = (props) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user !== null && user.role_id === 1 ? (
        <ApplicationTestUserSection step={props.step} />
      ) : (
        <ApplicationTestHRSection step={props.step} />
      )}
    </div>
  );
};
export default ApplicationTestSection;
