import React, { useState } from "react";

function ApplicationTestUserSection(props) {
  const [status, setstatus] = useState(props.step.step.result === null ? 0 : 1);

  const [result, setresult] = useState(props.step.result);

  return status === 0 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to take your test?</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href={"/aptitude-test/" + props.step.id}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start the test
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Test has already been finished</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        {"you " + (props.step.step.pass ? "passed" : "failed") + " the test!"}
      </p>
    </div>
  );
}

export default ApplicationTestUserSection;
