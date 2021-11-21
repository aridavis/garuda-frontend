import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class JobController {
  static getJobList = (body) => {
    return ApiClient.Post(ApiPath.JOB_LIST, [], body);
  };

  static getCompanyJobList = (body) => {
    return ApiClient.Post(ApiPath.COMPANY_JOB_LIST, [], body);
  };

  static createJob = (body) => {
    return ApiClient.Post(ApiPath.CREATE_JOB, [], body);
  };
}
