// 获取商铺列表
import { get } from "@/utils/request";
import api from "@/services/api";
import { NEARBYMERCHANT } from "@/constants/actionTypes";
export const GetNearbymerchant = (payload) => ({
  type: NEARBYMERCHANT,
  payload: get(api.Getrestaurantsurl,payload),
});
