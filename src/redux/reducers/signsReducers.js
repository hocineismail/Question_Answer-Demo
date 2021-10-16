const initialState = {
  is_loged_in: false,
  // rows_per_page: 5
};

export default function signsReducers(state = initialState, action) {
  switch (action.type) {
    case "LOGINED_IN":
      return {
        ...state,
        is_loged_in: true,
      };
    case "LOGINED_IN_ERROR":
      return {
        ...state,
      };
    default:
      return state;
  }
}
