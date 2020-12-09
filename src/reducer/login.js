const initialState = {
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_FUN":
      state.user = payload.data
      console.log(payload.data)
      localStorage.setItem("user_id", payload.data.user_id);
      return { ...state, ...payload };

    default:
      return state;
  }
};
