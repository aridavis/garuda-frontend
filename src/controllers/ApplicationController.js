import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class ApplicationController {
  static apply = (body) => {
    return ApiClient.Post(ApiPath.APPLY_JOB, [], body);
  };
  static getApplicationList = (body) => {
    return ApiClient.Post(ApiPath.GET_APPLICATION_LIST, [], body);
  };

  static getApplicationDetail = (id) => {
    return ApiClient.Get(ApiPath.GET_APPLICATION_DETAIL, [id], {});
  };

  static getApplicationProcessDetail = (id) => {
    return ApiClient.Get(ApiPath.GET_APPLICATION_PROCESS_DETAIL, [id], {});
  };

  static uploadCv = (body) => {
    return ApiClient.PostFormData(ApiPath.UPLOAD_CV, [], body);
  };

  static pass = (applicationProcessId, result) => {
    return ApiClient.Post(ApiPath.PASS, [], {
      application_process_id: applicationProcessId,
      result: result,
    });
  };

  static fail = (applicationProcessId, result) => {
    return ApiClient.Post(ApiPath.FAIL, [], {
      application_process_id: applicationProcessId,
      result: result,
    });
  };
}
