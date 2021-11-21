import { ApiPath } from "../constants/ApiPath";
import ApiClient from "../utils/ApiClient";

export class MeetingController {
  static updateUserSocketId = (roomId, id) => {
    return ApiClient.Put(ApiPath.JOIN_MEETING, [roomId], {
      socket_id: id,
    });
  };

  static getMeetingDetail = (roomId) => {
    return ApiClient.Get(ApiPath.JOIN_MEETING, [roomId], {});
  };
}
