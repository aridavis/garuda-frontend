import React, { useState } from "react";

function ApplicationTestHRSection(props) {
  const [status, setstatus] = useState(props.step.step.result === null ? 0 : 1);
  const [result, setresult] = useState("pass");

  return status === 0 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Candidate is taking the test</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        please wait until the candidate finishes their test to view the result
      </p>
    </div>
  ) : (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Test has already been finished</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        {"the candidate " +
          (props.step.step.pass ? "passed" : "failed") +
          " the test!"}
      </p>
    </div>
  );
}

export default ApplicationTestHRSection;
