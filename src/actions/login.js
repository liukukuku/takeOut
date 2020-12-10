// 登陆
import { post } from "@/utils/request";
import api from "@/services/api";
export function loginfun(payload) {
  return {
    type: "LOGIN_FUN",
    payload: post(api.login, payload),
  };
}
