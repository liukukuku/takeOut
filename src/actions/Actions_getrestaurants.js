// 获取商铺列表
import { get } from "@/utils/request";
import api from "@/services/api";
import { RESTAURANTS } from "@/constants/actionTypes";
export const Getrestaurants = (payload) => ({
  type: RESTAURANTS,
  payload: get(api.Getrestaurantsurl,payload),
});
