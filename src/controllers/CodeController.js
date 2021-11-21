import { ApiPath } from "../constants/ApiPath";
import ApiClient from "../utils/ApiClient";

export class CodeController {
  static show = (id) => {
    return ApiClient.Get(ApiPath.GET_CP_QUESTION_DETAIL, [id], {});
  };

  static get = () => {
    return ApiClient.Get(ApiPath.GET_CP_QUESTION_LIST, [], {});
  };

  static submit = (id, languageId, code) => {
    return ApiClient.Post(ApiPath.SUBMIT_CP_QUESTION, [], {
      question_id: id,
      language_id: languageId,
      source_code: btoa(code),
    });
  };
}
