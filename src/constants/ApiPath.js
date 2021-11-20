import { Constant } from "./Constant";

export const ApiPath = {
  GET_CP_QUESTION_DETAIL: Constant.API_PATH + "/codes/{}",
  SUBMIT_CP_QUESTION: Constant.API_PATH + "/codes/submit",

  LOGIN: Constant.API_PATH + "/auth/login",
  LOGOUT: Constant.API_PATH + "/auth/logout",
  CURRENT_USER: Constant.API_PATH + "/auth/user",

  COMPANY_LOGIN: Constant.API_PATH + "/auth/co/login",

  REGISTER_JOBSEEKER: Constant.API_PATH + "/users/jobseeker",

  JOB_LIST: Constant.API_PATH + "/jobs/filter",
  CREATE_JOB: Constant.API_PATH + "/jobs/store",

  APPLY_JOB: Constant.API_PATH + "/applications/store",
  GET_APPLICATION_LIST: Constant.API_PATH + "/applications/filter",
};
