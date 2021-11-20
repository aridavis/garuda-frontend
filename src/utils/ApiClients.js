import constant from "../constant";
import SnackbarUtils from "./SnackBarUtils";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = constant.API_URL;

axios.interceptors.request.use(function (config) {
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    try {
      if (error.response !== undefined) {
        var message = error.response.data["errorMessage"];
        SnackbarUtils.error(message);
      }
    } catch (ex) {
      if (error.response?.status !== undefined) {
        SnackbarUtils.error(`Error ${error.response.status}`);
      } else {
        SnackbarUtils.error(ex.toString());
      }
    }
    return Promise.reject(error);
  }
);

class ApiClient {
  static Get = (url, params) => {
    return axios.get(API_URL + url, {
      params: params,
    });
  };

  static Post = (url, body) => {
    return axios.post(API_URL + url, body);
  };
}

export default ApiClient;
