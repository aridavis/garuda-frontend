
import { CheckIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import ApplicationTestSection from './applicationtest/ApplicationTestSection';
import CVReviewSection from './cvreview/CVReviewSection';

function ApplicationProcess({steps}) {

  const [selectedStep, setSelectedStep] = useState({
    index: 0,
    step: steps[0]
  });

  const handleChangeStep = (index) => {
    setSelectedStep({
      index: parseInt(index),
      step: steps[index]
    });
    console.log(selectedStep)
  }

  return (
    <>
      <nav aria-label="Progress">
        <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`relative md:flex-1 md:flex border-r-2  ${selectedStep.index === stepIdx ? "bg-gradient-to-r from-green-300" : "bg-white"}`}>
              {step.status === 'complete' ? (
                <button
                  className="group flex items-center w-full"
                  onClick={() => {
                    handleChangeStep(stepIdx)
                  }}
                >
                  <span
                    className="px-6 py-4 flex items-center text-sm font-medium"
                    onClick={() => {
                      handleChangeStep(stepIdx)
                    }}
                  >
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary">
                      <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                </button>
              ) : step.status === 'current' ? (
                <button
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                  onClick={() => {
                    handleChangeStep(stepIdx)
                  }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full">
                    <span className="text-primary">{stepIdx + 1}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-primary">{step.name}</span>
                </button>
              ) : (
                <button className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">{stepIdx + 1}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                    <span className="ml-4 text-sm font-medium text-primary">• upcoming</span>
                  </span>
                </button>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {
        selectedStep.step.type === '1' ?
          (<CVReviewSection />) :
          selectedStep.step.type === '2' ?
            (<ApplicationTestSection />) :
            selectedStep.step.type === '3' ?
              (<ApplicationHRInterview />) :
              selectedStep.step.type === '4' ?
                (<ApplicationUserCodingInterview />) :
                (<ApplicationUserCodingInterview />)
      }
    </>
  );
}

const ApplicationHRInterview = (props) => {
  return (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 h-96 mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to take your test?</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="/application-test/1"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start the test
          </a>
        </div>
      </div>
    </div>
  )
}

const ApplicationUserCodingInterview = (props) => {
  return (
    <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 h-96 mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to take your test?</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="/application-test/1"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start the test
          </a>
        </div>
      </div>
    </div>
  )
}


export default ApplicationProcess;