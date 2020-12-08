// 获取食品分类列表
import { get } from "@/utils/request";
import api from "@/services/api";
import { GETENTRYURL } from "@/constants/actionTypes";
export const Getentry = (payload) => ({
  type: GETENTRYURL,
  payload: get(api.GetentryUrl),
});
