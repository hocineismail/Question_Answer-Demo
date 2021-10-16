import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetch_followers({ id, page }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "PRE_FETCH_FOLLOWERS" };
    dispatch(action);
    try {
      // axios
      //   .get(
      //     `${url}/followers?page=${page}&rows_per_page=${5}&user_id=${id}`,
      //     config
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FETCH_FOLLOWERS",
      //       payload: {
      //         followers: response.data.rows,
      //         total_followers: response.data.total,
      //         page: page,
      //         hasMore: response.data.rows.length === 5,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FETCH_FOLLOWERS_ERROR",
      //       payload: error.response.data,
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function fetch_following({ page, id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "PRE_FETCH_FOLLOWING" };
    dispatch(action);
    try {
      // axios
      //   .get(
      //     `${url}/following?page=${page}&rows_per_page=${5}&user_id=${id}`,
      //     config
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FETCH_FOLLOWING",
      //       payload: {
      //         following: response.data.rows,
      //         total_following: response.data.total,
      //         page: page,
      //         hasMore: response.data.rows.length === 5,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FETCH_FOLLOWERS_ERROR",
      //       payload: error.response.data,
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function follow_user({ user_id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = {
      type: "PRE_FOLLOW_USER",
      payload: {
        user_id: user_id,
      },
    };
    dispatch(action);
    const data = {
      following_id: user_id,
    };

    try {
      // axios
      //   .post(`${url}/follow-user`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FOLLOW_USER",
      //       payload: {
      //         user_id: user_id,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FOLLOW_USER_ERROR",
      //       payload: error.response.data,
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}
export function unfollow_user({ user_id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = {
      type: "PRE_UNFOLLOW_USER",
      payload: {
        user_id: user_id,
      },
    };
    dispatch(action);
    const data = {
      following_id: user_id,
    };

    try {
      // axios
      //   .patch(`${url}/follow-user`, data, config)
      //   .then((response) => {
      //     let action = {
      //       type: "UNFOLLOW_USER",
      //       payload: {
      //         user_id: user_id,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FOLLOW_USER_ERROR",
      //       payload: error.response.data,
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}
export function follow_question({ question_id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "PRE_FOLLOW_QUESTION" };
    dispatch(action);
    const data = {
      question_id: question_id,
    };
    try {
      // axios
      //   .post(`${url}/follow-question`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FOLLOW_QUESTION",
      //       payload: {
      //         following: response.data.rows,
      //         total_following: response.data.total,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FOLLOW_QUESTION_ERROR",
      //       payload: error.response.data,
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}
