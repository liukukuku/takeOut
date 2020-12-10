// 获取验证码
import { post } from "@/utils/request";
import api from "@/services/api";
export function loginyzfun() {
  return {
    type: "LOGIN_YZ_FUN",
    payload: post(api.loginyz),
  };
}
