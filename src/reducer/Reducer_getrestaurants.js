import { RESTAURANTS } from "@/constants/actionTypes";
import _ from 'lodash'
const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTAURANTS:
      return { ...state,data: _.get(payload,"data",[])};

    default:
      return state;
  }
};