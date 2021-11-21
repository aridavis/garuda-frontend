import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import CVReviewHRSection from "./CVReviewHRSection";
import CVReviewUserSection from "./CVReviewUserSection";

function CVReviewSection(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user !== null && user.role_id === 1 ? (
        <CVReviewUserSection step={props.step} cv={props.cv} />
      ) : (
        <CVReviewHRSection step={props.step} cv={props.cv} />
      )}
    </div>
  );
}

export default CVReviewSection;
