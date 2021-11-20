import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { generateInputFieldProps } from '../../../props/InputFieldProps';
import { useFormik } from 'formik';
import InputField from '../../../components/InputField';

function CreateJobDialog(props) {
  const inputs = [
    generateInputFieldProps("name", "Name", "text"),
    generateInputFieldProps(
      "desc",
      "Description",
      "text"
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

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });

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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
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
                <div>
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