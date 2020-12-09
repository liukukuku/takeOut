const initialState = {
    
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_FUN":
      console.log(payload);
      return { ...state, ...payload };

    default:
      return state;
  }
};
