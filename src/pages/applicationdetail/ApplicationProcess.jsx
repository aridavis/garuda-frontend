import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

function ApplicationProcess(props) {
  const steps = [
    { id: '01', name: 'Job details', applicationProcessId: '#', status: 'complete' },
    { id: '02', name: 'Application form', applicationProcessId: '#', status: 'current' },
    { id: '03', name: 'HR Interview', applicationProcessId: '#', status: 'upcoming' },
  ]

  return (
    <nav aria-label="Progress">
      <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex-1 md:flex">
            {step.status === 'complete' ? (
              <button className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary">
                    <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </button>
            ) : step.status === 'current' ? (
              <button className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full">
                  <span className="text-primary">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-primary">{step.name}</span>
              </button>
            ) : (
              <button className="group flex items-center">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </button>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default ApplicationProcess;