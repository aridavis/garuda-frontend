import { useFormik } from "formik";
import InputField from "../../components/InputField";
import { generateInputFieldProps } from "../../props/InputFieldProps";
import { AuthController } from "../../controllers/AuthController";
import { Constant } from "../../constants/Constant";
import { setFormikErrors } from "../../utils/formikHelpers";
import SnackbarUtils from "../../utils/SnackbarUtils";

const cookie = require("react-cookies");

function LoginScreen() {
  const inputs = [
    generateInputFieldProps("email", "Email", "text"),
    generateInputFieldProps("password", "Password", "password"),
    generateInputFieldProps("check", "Remember Me", "check"),
  ];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, formikHelpers) => {
      AuthController.login({
        email: values.email,
        password: values.password,
        remember_me: values.check !== undefined && values.check.length > 0,
      })
        .then((res) => {
          cookie.save(Constant.ACCESS_TOKEN, res.data.access_token, {
            path: "/",
            expires: new Date(res.data.expires_at),
          });
          window.location.href = "/";
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              setFormikErrors(err.response.data, formikHelpers.setFieldError);
              break;
            case 401:
              setFormikErrors(
                { email: ["email or password is invalid"] },
                formikHelpers.setFieldError
              );
              break;
            default:
              SnackbarUtils.error("Something went wrong");
          }
        });
    },
  });

  return (
    <div className="min-h-screen bg-customwhite flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Find your dream job today
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                Log in
              </button>
            </div>
          </form>

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
            Let's setup your account first by&nbsp;
            <a href="/register" className="font-medium underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
