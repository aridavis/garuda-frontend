import { ApiPath } from "../constants/ApiPath";
import ApiClient from "../utils/ApiClient";

export class MeetingController {
  static updateUserSocketId = (roomId, id) => {
    return ApiClient.Get(ApiPath.GET_CP_QUESTION_DETAIL, [id], {
      socket_id: id,
    });
  };
}
