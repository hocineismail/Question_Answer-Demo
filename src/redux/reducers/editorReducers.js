const initialState = {
  loading: false,
  clean_editor: false,
  // rows_per_page: 5
};

export default function editorReducers(state = initialState, action) {
  switch (action.type) {
    case "ON_LOADING":
      return {
        ...state,
        loading: true,
        clean_editor: false,
      };
    case "ADD_ANSWER":
      return {
        ...state,
        loading: false,
        clean_editor: true,
      };
    default:
      return state;
  }
}
