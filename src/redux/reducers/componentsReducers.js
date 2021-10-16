const initialState = {
  counter: 0,
  is_drawer_open: false,
};
console.log("action");
export default function componentsReducers(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "up":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "down":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "OPEN_DRAWER":
      return {
        ...state,
        is_drawer_open: true,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        is_drawer_open: false,
      };
    default:
      return state;
  }
}
