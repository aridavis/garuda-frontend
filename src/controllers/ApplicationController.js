import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class ApplicationController {
  static apply = (body) => {
    return ApiClient.Post(ApiPath.APPLY_JOB, [], body);
  };
  static getApplicationList = (body) => {
    return ApiClient.Post(ApiPath.GET_APPLICATION_LIST, [], body);
  };
}
