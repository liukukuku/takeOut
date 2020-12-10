const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGEPASSWORD_FUN":
      return { ...state, ...payload };

    default:
      return state;
  }
};
