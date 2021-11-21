import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import MeetingCompanySection from './MeetingCompanySection';
import MeetingUserSection from './MeetingUserSection';

const MeetingSection = (props) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user !== null && user.role_id === 1 ?
        (<MeetingUserSection />) :
        (<MeetingCompanySection />)
      }
    </div>
  )
}
export default MeetingSection;