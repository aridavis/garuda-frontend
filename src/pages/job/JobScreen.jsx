import React, { useContext } from "react";
import SideBar from "../../components/SideBar";
import CompanyJobScreen from "./company/CompanyJobScreen";
import UserJobScreen from "./user/UserJobScreen";
import { UserContext } from "../../context/UserContext";

function JobScreen(props) {
  const { user } = useContext(UserContext);

  return (
    <SideBar>
      {user !== null && user.role_id === 1 ? (
        <UserJobScreen />
      ) : (
        <CompanyJobScreen />
      )}
    </SideBar>
  );
}

export default JobScreen;
