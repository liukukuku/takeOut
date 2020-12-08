import { GETENTRYURL } from "@/constants/actionTypes";
import _ from 'lodash'
const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GETENTRYURL:

      return { ...state,data: _.get(payload,"data",[])};

    default:
      return state;
  }
};
