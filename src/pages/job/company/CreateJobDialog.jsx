import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { generateInputFieldProps } from '../../../props/InputFieldProps';
import { useFormik } from 'formik';
import InputField from '../../../components/InputField';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';

function CreateJobDialog(props) {
  const inputs = [
    generateInputFieldProps("name", "Name", "text"),
    generateInputFieldProps(
      "desc",
      "Description",
      "multiline"
    ),
    generateInputFieldProps(
      "Category",
      "Category",
      "text"
    ),
    generateInputFieldProps(
      "payrange",
      "Payrange",
      "text"
    ),
    generateInputFieldProps(
      "country",
      "Country",
      "text"
    ),
    generateInputFieldProps(
      "state",
      "State",
      "text"
    ),
  ];

  const steps = [
    {id:1, desc: "CV Review"},
    {id:2, desc: "Aptitude Test"},
    {id:3, desc: "HR Interview"},
    {id:4, desc: "User Interview (Programming)"},
    {id:5, desc: "User Interview"},
  ]

  const formik = useFormik({
    initialValues: {
      jobStep: []
    },
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });

  const handleAddStep = () => {
    const steps = formik.values.jobStep;
    steps.push(1)
  }

  const handleRemoveStep = (idx) => {
    const jobStep = formik.values.jobStep;
    jobStep.splice(idx, 1)
    formik.setValues({
      ...formik.values,
      jobStep
    })
  }

  const handleChangeStep = (value, idx) => {
    const jobStep = formik.values.jobStep;
    jobStep[idx] = parseInt(value);
    formik.setValues({
      ...formik.values,
      jobStep
    })
  }

  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={props.isOpen} onClose={props.closeDialog}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center mb-4">
                Create new job listing
              </Dialog.Title>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {inputs.map((f) => (
                  <InputField
                    {...f}
                    {...formik}
                    value={formik.values[f.name]}
                    onChange={formik.handleChange}
                  />
                ))}
                <div className="flex justify-between items-center">
                  <div className="text-lg leading-6 font-medium text-gray-900 text-center">
                    Add application process
                  </div>
                  <button
                    type="submit"
                    className=" flex justify-center p-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-fourth hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fourth"
                    onClick={handleAddStep}
                  >
                    <PlusIcon className="text-white h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {
                  formik.values.jobStep.map((step, index) => (
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label htmlFor="step" className="block text-sm font-medium text-gray-700">
                          Step{" " + (index+1)}
                        </label>
                        <button
                          type="submit"
                          className=" flex justify-center p-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-third hover:bg-third focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-third"
                          onClick={()=>{
                            handleRemoveStep(index)
                          }}
                        >
                          <MinusIcon className="text-white h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                      <select
                        id={"step"+index}
                        value={step}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                        onChange={(e) => {
                          handleChangeStep(e.target.value, index)
                        }}
                      >
                        {
                          steps.map((s)=>(
                            <option value={s.id}>{s.desc}</option>
                          ))
                        }
                      </select>
                    </div>
                  ))
                }
                <div className="pt-5 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CreateJobDialog;