import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class QuestionController {
  static getQuestionList = () => {
    return ApiClient.Get(ApiPath.QUESTION_LIST, [], {});
  };

  static answer = (body) => {
    return ApiClient.Post(ApiPath.ANSWER, [], body);
  };
}

export default QuestionController;
