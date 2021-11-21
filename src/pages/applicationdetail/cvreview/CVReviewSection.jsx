import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import CVReviewHRSection from './CVReviewHRSection';
import CVReviewUserSection from './CVReviewUserSection';

function CVReviewSection(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user !== null && user.role_id === 1 ?
        (<CVReviewUserSection />) :
        (<CVReviewHRSection />)
      }
    </div>
  );
}

export default CVReviewSection;