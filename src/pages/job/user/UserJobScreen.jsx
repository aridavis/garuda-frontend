import React, { useEffect, useState } from "react";
import UserJobCardList from "./UserJobCardList";
import Empty from "../../../assets/empty.png";
import { JobController } from "../../../controllers/JobController";

function UserJobScreen(props) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    JobController.getJobList({
      paging: {
        page: 0,
        size: 200,
      },
      sort: {
        sort_by: "",
        direction: "",
      },
    }).then((res) => {
      setJobs(res.data.contents);
      console.log(res.data.contents);
    });
  }, []);

  return (
    <>
      {jobs.length > 0 ? (
        <UserJobCardList jobs={jobs} />
      ) : (
        <div className="text-center m-auto">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            <span className="block">No job listing available yet</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-fourth">
            Please wait while recruiter prepare job lists
          </p>
          <img className="w-96 m-auto" src={Empty} alt="" />
        </div>
      )}
    </>
  );
}

export default UserJobScreen;
