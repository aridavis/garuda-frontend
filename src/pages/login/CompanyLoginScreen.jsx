import { useFormik } from "formik";
import logo from "../../assets/logo.png";
import { generateInputFieldProps } from "../../props/InputFieldProps";
import InputField from "../../components/InputField";

function CompanyLoginScreen() {
  const inputs = [
    generateInputFieldProps("email", "Email", "input your email here!", "text"),
    generateInputFieldProps(
      "password",
      "Password",
      "input your password here!",
      "password"
    ),
    generateInputFieldProps(
      "check",
      "Remember Me",
      "input your password here!",
      "check"
    ),
  ];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img className="h-12 w-auto" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Log in to your <span className="text-fourth underline">WORK</span>{" "}
              account
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form
                onSubmit={formik.handleSubmit}
                action="#"
                method="POST"
                className="space-y-6"
              >
                {inputs.map((f) => (
                  <InputField
                    {...f}
                    value={formik.values[f.name]}
                    onChange={formik.handleChange}
                  />
                ))}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>

            <div className="md:hidden">
              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    or don't have account?
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-blue-gray-500 text-center">
                Please contact us through our&nbsp;
                <a href="/" className="font-medium underline">
                  Contact Person
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex relative w-0 flex-1 items-center justify-center bg-fourth">
        <div className="lg:self-center my-auto w-3/4">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to recruit?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Let your job opportunity reach the right person, with our service we
            help you simplify the recruitment process and share your company
            industry knowledge
          </p>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Don't have account yet? Please contact us through our&nbsp;
            <a href="/" className="font-medium underline">
              Contact Person
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyLoginScreen;
