import ApiClient from "../utils/ApiClient";
import { ApiPath } from "../constants/ApiPath";

export class QuestionController {
  static getQuestionList = () => {
    return ApiClient.Get(ApiPath.QUESTION_LIST, [], {});
  };
}

export default QuestionController;
