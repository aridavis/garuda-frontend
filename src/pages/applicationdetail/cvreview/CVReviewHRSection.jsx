import React, { useState } from "react";
import CVReviewConfirmDialog from "./CVReviewConfirmDialog";
import { Constant } from "../../../constants/Constant";

const CVReviewHRSection = (props) => {
  // const [status, setStatus] = useState()
  const [status, setStatus] = useState(
    props.cv === null
      ? 0
      : props.step.step.result === null
      ? 1
      : props.step.step.pass === 1
      ? 2
      : 3
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return status === 0 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">CV Upload</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        please wait while the candidate upload the neccesary document
      </p>
    </div>
  ) : status === 1 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <CVReviewConfirmDialog
        applicationProcessId={props.step.step.id}
        isOpen={isDialogOpen}
        closeDialog={() => {
          setIsDialogOpen(false);
        }}
      />
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">CV Review</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        please review the candidate cv&nbsp;
        <a
          href={Constant.BACKEND_URL + props.cv}
          className="font-medium underline"
          target="_blank"
        >
          here
        </a>
      </p>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          submit result
        </button>
      </div>
    </div>
  ) : status === 2 ? (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">CV is already reviewed</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        you passed the candidate cv review
      </p>
    </div>
  ) : (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">CV is already reviewed</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-primary">
        you failed the candidate cv review
      </p>
    </div>
  );
};

export default CVReviewHRSection;
