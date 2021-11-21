import { Constant } from "./Constant";

export const ApiPath = {
  GET_CP_QUESTION_DETAIL: Constant.API_PATH + "/codes/{}",
  GET_CP_QUESTION_LIST: Constant.API_PATH + "/codes",
  SUBMIT_CP_QUESTION: Constant.API_PATH + "/codes/submit",

  LOGIN: Constant.API_PATH + "/auth/login",
  LOGOUT: Constant.API_PATH + "/auth/logout",
  CURRENT_USER: Constant.API_PATH + "/auth/user",

  REGISTER_JOBSEEKER: Constant.API_PATH + "/users/jobseeker",

  JOB_LIST: Constant.API_PATH + "/jobs/filter",

  CREATE_JOB: Constant.API_PATH + "/jobs/store",

  APPLY_JOB: Constant.API_PATH + "/applications/store",
  GET_APPLICATION_LIST: Constant.API_PATH + "/applications/filter",
  GET_APPLICATION_DETAIL: Constant.API_PATH + "/applications/{}",

  QUESTION_LIST: Constant.API_PATH + "/basic-questions",

  COMPANY_LOGIN: Constant.API_PATH + "/auth/co/login",
  COMPANY_JOB_LIST: Constant.API_PATH + "/co/jobs/filter",

  ANSWER: Constant.API_PATH + "/application-process/answer",
  UPLOAD_CV: Constant.API_PATH + "/application-process/cv",
  GET_APPLICATION_PROCESS_DETAIL: Constant.API_PATH + "/application-process/{}",
  PASS: Constant.API_PATH + "/application-process/pass",
  FAIL: Constant.API_PATH + "/application-process/fail",
};
