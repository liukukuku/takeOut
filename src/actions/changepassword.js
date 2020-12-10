// 重置密码
import { post } from "@/utils/request";
import api from "@/services/api";
export function changepassfun(payload) {
  return {
    type: "CHANGEPASSWORD_FUN",
    payload: post(api.changepassword, payload),
  };
}