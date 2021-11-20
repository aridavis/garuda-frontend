import SnackbarUtils from "./SnackbarUtils";

const Axios = require("axios");
const client = Axios.create();

const cookies = require("react-cookies");

client.interceptors.request.use((config) => {
  const token = cookies.load("ACCESS_TOKEN");

  if (token !== undefined) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

client.interceptors.response.use(
  (response) => {
    SnackbarUtils.closeSnackbar(0);
    return response;
  },
  (error) => {
    try {
      if (error.response.status === 401) {
        SnackbarUtils.error("Unauthorized");
      } else {
        if (
          error.response !== undefined &&
          error.response.data.errorMessage.length > 0
        ) {
          SnackbarUtils.error(error.response.data.errorMessage);
        } else {
          SnackbarUtils.error(
            "Error " +
              error.response?.status +
              ": " +
              error.response?.statusText
          );
        }
      }
    } catch (exception) {
      SnackbarUtils.error("Unspecified error.");
    }

    return Promise.reject(error);
  }
);

export default class ApiClient {
  static Get = (url, pathVariables, params) => {
    return client?.get(ApiClient.buildUrl(url, pathVariables), {
      params: params,
    });
  };

  static Post = (url, pathVariables, body) => {
    return client?.post(ApiClient.buildUrl(url, pathVariables), body);
  };

  static PostFormData = (url, pathVariables, body) => {
    const data = new FormData();
    Object.keys(body).forEach(function (key) {
      data.append(key, body[key]);
    });
    return client?.post(ApiClient.buildUrl(url, pathVariables), body);
  };

  static Put = (url, pathVariables, body) => {
    return client?.put(ApiClient.buildUrl(url, pathVariables), body);
  };

  static Delete = (url, pathVariables) => {
    return client?.delete(ApiClient.buildUrl(url, pathVariables));
  };

  static buildUrl = (url, pathVariables) => {
    pathVariables.forEach((variable) => {
      url = url.replace("{}", variable);
    });
    return url;
  };
}
