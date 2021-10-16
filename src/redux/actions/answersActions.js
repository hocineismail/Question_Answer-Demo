import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetch_answers(body) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const { page, id } = body;
    try {
      // axios
      //   .get(`${url}/answers?rows_per_page=5&page=${page}&id=${id}`, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FETCH_ANSWERS",
      //       payload: {
      //         answers: response.data.rows,
      //         page: page,
      //         hasMore: response.data.rows.length === 5,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //     let action = {
      //       type: "FETCH_ANSWERS_ERROR",
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function fetch_answers_by_user({ id, page }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // axios
      //   .get(
      //     `${url}/answers/user?author_id=${id}&page=${page}&rows_per_page=5`,
      //     config
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FETCH_ANSWERS_BY_USER",
      //       payload: {
      //         answers: response.data.rows,
      //         page: page,
      //         hasMore: response.data.rows.length === 5,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //     let action = {
      //       type: "FETCH_ANSWERS_BY_USER_ERROR",
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function add_answer({ question_id, answer }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    try {
      // const data = {
      //   answer: answer,
      //   question_id: question_id,
      // };
      // let action = {
      //   type: "ON_LOADING",
      // };
      // dispatch(action);
      // axios
      //   .post(`${url}/answer`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "ADD_ANSWER",
      //       payload: {
      //         answer: response.data[0],
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //     let action = {
      //       type: "ADD_ANSWER_ERROR",
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}
export function clean_answers() {
  return function (dispatch) {
    let action = {
      type: "CLEAN_ANSWERS",
    };
    return dispatch(action);
  };
}
