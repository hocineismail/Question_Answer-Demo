export function OPEN_DRAWER() {
  return function (dispatch) {
    let action = {
      type: "OPEN_DRAWER",
    };
    return dispatch(action);
  };
}

export function CLOSE_DRAWER() {
  return function (dispatch) {
    let action = {
      type: "CLOSE_DRAWER",
    };
    return dispatch(action);
  };
}
