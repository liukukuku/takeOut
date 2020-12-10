const initialState = {
  obj: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_YZ_FUN":
      if (payload.data !== undefined) {
        state.obj = payload.data;
      }

      return { ...state };

    default:
      return state;
  }
};
