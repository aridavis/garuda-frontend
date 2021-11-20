import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class UserController {
  static registerJobseeker = (body) => {
    return ApiClient.PostFormData(ApiPath.REGISTER_JOBSEEKER, [], body);
  };
}
