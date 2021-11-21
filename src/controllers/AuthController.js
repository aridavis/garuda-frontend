import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";
import { Constant } from "../constants/Constant";
const cookie = require("react-cookies");
export class AuthController {
  static login = (body) => {
    return ApiClient.Post(ApiPath.LOGIN, [], body);
  };

  static loginCompany = (body) => {
    return ApiClient.Post(ApiPath.COMPANY_LOGIN, [], body);
  };

  static getCurrentUser = () => {
    return ApiClient.Get(ApiPath.CURRENT_USER, [], {});
  };

  static logout = () => {
    cookie.remove(Constant.ACCESS_TOKEN, { path: "/" });
    ApiClient.Get(ApiPath.LOGOUT, [], {}).finally(() => {
      window.location.href = "/";
    });
  };
}
