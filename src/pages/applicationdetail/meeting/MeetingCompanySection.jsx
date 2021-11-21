import React, { useState } from "react";
import { ApplicationController } from "../../../controllers/ApplicationController";
import SnackbarUtils from "../../../utils/SnackbarUtils";

function MeetingCompanySection(props) {
  const [status, setstatus] = useState(props.step.step.result === null ? 0 : 1);
  const [result, setresult] = useState(props.step.step.result);

  return status === 0 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to have a meeting</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          {props.step !== undefined && (
            <a
              href={"/meeting/" + props.step.step.meeting_id}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start the meeting
            </a>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            ApplicationController.pass(props.applicationProcessId, "CV Pass")
              .then((res) => {
                SnackbarUtils.success("Success passing CV");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch((err) => {
                SnackbarUtils.error("There is an error");
              });
          }}
        >
          Pass
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            ApplicationController.fail(props.applicationProcessId, "fail")
              .then((res) => {
                SnackbarUtils.success("Success rejecting candidate");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch((err) => {
                SnackbarUtils.error("There is an error");
              });
          }}
        >
          Reject
        </button>
      </div>
    </div>
  ) : (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Meeting has already been finished</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        {"the candidate " + result + " the test!"}
      </p>
    </div>
  );
}

export default MeetingCompanySection;
