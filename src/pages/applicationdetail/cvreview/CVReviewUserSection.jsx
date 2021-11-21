import { useFormik } from 'formik';
import React, { useState } from 'react';
import InputField from '../../../components/InputField';
import { generateInputFieldProps } from '../../../props/InputFieldProps';

function CVReviewUserSection(props) {
  const [status, setStatus] = useState(3)

  const input = generateInputFieldProps(
    "image_url",
    "Profile Picture",
    "image"
  )

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, formikHelpers) => {

    },
  });

  return (
    status === 0 ?
      (
      <div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">CV Upload</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary">
          please upload your cv here
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8"
        >
          <InputField
            {...input}
            {...formik}
            value={formik.values[input.name]}
            onChange={formik.handleChange}
            setFieldValue={formik.setFieldValue}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>)
      : status === 1 ?
        (<div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">CV is being reviewed</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary">
            please wait while your CV is being reviewed
          </p>
        </div>)
        : status === 2 ?
          (<div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">CV is already reviewed</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-primary">
              your CV has already been reviewed and you pass, please proceed to the next step
            </p>
          </div>) :
          (<div className="max-w-7xl m-auto text-center flex flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-8 bg-white pb-16 sm:mt-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">CV is already reviewed</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-primary">
              unfortunately you didn't pass
            </p>
          </div>)
  )
}


export default CVReviewUserSection;