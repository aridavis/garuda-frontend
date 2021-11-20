import { useFormik } from "formik";
import InputField from "../../components/InputField";
import { generateInputFieldProps } from "../../props/InputFieldProps";
import { UserController } from "../../controllers/UserController";
import SnackbarUtils from "../../utils/SnackbarUtils";

function SignInScreen() {
  const inputs = [
    generateInputFieldProps(
      "first_name",
      "First Name",
      "input your firstname here!",
      "text"
    ),
    generateInputFieldProps(
      "last_name",
      "Last Name",
      "input your lastname here!",
      "text"
    ),
    generateInputFieldProps(
      "country",
      "Country",
      "input your country here!",
      "text"
    ),
    generateInputFieldProps(
      "address",
      "Street Address",
      "input your address here!",
      "text"
    ),
    generateInputFieldProps("city", "City", "input your city here!", "text"),
    generateInputFieldProps("state", "State", "input your state here!", "text"),
    generateInputFieldProps("email", "Email", "input your email here!", "text"),
    generateInputFieldProps(
      "password",
      "Password",
      "input your password here!",
      "password"
    ),
    generateInputFieldProps(
      "dob",
      "Date Of Birth",
      "input your dob here!",
      "date"
    ),
    generateInputFieldProps(
      "phone",
      "Phone Number",
      "input your phone here!",
      "text"
    ),
    generateInputFieldProps(
      "image_url",
      "Profile Picture",
      "input your profile picture here!",
      "image"
    ),
  ];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, formikHelpers) => {
      UserController.registerJobseeker(formik.values).then((res) => {
        SnackbarUtils.success(
          "Success registering user, please sign in again."
        );
      });
    },
  });

  return (
    <>
      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-customwhite">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Create account
              </h1>
              <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                Kickstart your journey with us to find your dream job right
                away!
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
                    onSubmit={formik.handleSubmit}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    {inputs.map((f) =>
                      f.type !== "image" ? (
                        <InputField
                          {...f}
                          {...formik}
                          value={formik.values[f.name]}
                          onChange={formik.handleChange}
                          setFieldValue={formik.setFieldValue}
                        />
                      ) : (
                        <div className="col-span-2">
                          <InputField
                            {...f}
                            {...formik}
                            value={formik.values[f.name]}
                            onChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                            limit={1}
                          />
                        </div>
                      )
                    )}
                    <div className="sm:col-span-2 flex flex-row-reverse">
                      <button
                        type="submit"
                        className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SignInScreen;
