import React from 'react';
import SideBar from "../../components/SideBar"
import CompanyJobScreen from './company/CompanyJobScreen';
import UserJobScreen from './user/UserJobScreen';

function JobScreen(props) {
  const isCompany = true

  return (
    <SideBar>
      {
        isCompany ?
          (<CompanyJobScreen />) :
          (<UserJobScreen />)
      }
    </SideBar>
  );
}

export default JobScreen;