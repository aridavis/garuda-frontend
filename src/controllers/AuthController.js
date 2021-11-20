import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class AuthController {
  static login = (body) => {
    return ApiClient.Post(ApiPath.LOGIN, [], body);
  };

  static getCurrentUser = () => {
    return ApiClient.Get(ApiPath.CURRENT_USER, [], {});
  };
}
