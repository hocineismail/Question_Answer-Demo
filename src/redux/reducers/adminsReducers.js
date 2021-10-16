const initialState = {
  admins: [
    {
      id: 1,
      email: "maelrolland@gmail.com",
    },
  ],
  page: 0,
  rows_per_page: 5,
};

export default function adminsReducers(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ADMINS":
      return {
        ...state,
        admins: action.payload.admins,
        page: action.payload.page,
      };
    case "ON_CHANGE_ROWS_PER_PAGE":
      return {
        ...state,
        rows_per_page: action.payload.rows_per_page,
        page: 0,
      };
    case "ON_CHANGE_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
