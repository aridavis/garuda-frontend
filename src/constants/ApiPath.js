import { Constant } from "./Constant";

export const ApiPath = {
  GET_CP_QUESTION_DETAIL: Constant.API_PATH + "/codes/{}",
  SUBMIT_CP_QUESTION: Constant.API_PATH + "/codes/submit",

  LOGIN: Constant.API_PATH + "/auth/login",
  LOGOUT: Constant.API_PATH + "/auth/logout",
  CURRENT_USER: Constant.API_PATH + "/auth/user",

  REGISTER_JOBSEEKER: Constant.API_PATH + "/users/jobseeker",
};
