
import React from 'react';
import { useParams } from 'react-router';
import QuestionContainer from '../basictest/QuestionContainer'

function ApplicationTestScreen(props) {
  const id = useParams().testid;

  return (
    <main className="overflow-hidden">
      <div className="bg-customwhite">
        <div className="py-24 lg:py-32">
          <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Apptitude Test
            </h1>
            <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
              Please answer truthfully as this is an assessment to determine your score
            </p>
          </div>
        </div>
      </div>

      <section
        className="relative bg-customwhite"
        aria-labelledby="contactHeading"
      >
        <div
          className="absolute w-full h-1/2 bg-warm-gray-50"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-warm-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <div className="grid grid-cols-1 ">
              <div className="py-10 px-6 sm:px-10 xl:p-12">
                <form
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8"
                >
                  <QuestionContainer applicationProcessId={id} />                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ApplicationTestScreen;