// 获取食品分类列表
import { get } from "@/utils/request";
import api from "@/services/api";
import { GETENTRY } from "@/constants/actionTypes";
export const Getentry = (payload) => ({
  type: GETENTRY,
  payload: get(api.GetentryUrl),
});
