import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetch_questions(body) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const { page, filter } = body;

    try {
      //   axios
      //     .get(
      //       `${url}/questions?rows_per_page=5&page=${page}&speciality=${filter.speciality}&branche=${filter.branche}&category=${filter.category}`,
      //       config
      //     )
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_QUESTIONS",
      //         payload: {
      //           questions: response.data.rows,
      //           page: page,
      //           hasMore: response.data.rows.length === 5,
      //         },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //       let action = {
      //         type: "FETCH_QUESTIONS_ERROR",
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}

export function fetch_question({ id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    try {
      //   axios
      //     .get(`${url}/question?id=${id}`, config)
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_QUESTION",
      //         payload: {
      //           question: response.data[0],
      //         },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //       let action = {
      //         type: "FETCH_QUESTION_ERROR",
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}

export function fetch_questions_by_user({ id, page }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    try {
      //   axios
      //     .get(
      //       `${url}/questions/user?author_id=${id}&page=${page}&rows_per_page=5`,
      //       config
      //     )
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_QUESTIONS_BY_USER",
      //         payload: {
      //           questions: response.data.rows,
      //           page: page,
      //           hasMore: response.data.rows.length === 5,
      //         },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //       let action = {
      //         type: "FETCH_QUESTIONS_BY_USER_ERROR",
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}

export function fetch_interest_questions(body) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const { page } = body;
    try {
      //   axios
      //     .get(`${url}/interest-questions?rows_per_page=5&page=${page}`, config)
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_QUESTIONS",
      //         payload: {
      //           questions: response.data.rows,
      //           page: page,
      //           hasMore: response.data.rows.length === 5,
      //         },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error.response);
      //       let action = {
      //         type: "FETCH_QUESTIONS_ERROR",
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}

export function addNewQuestion(data) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = {
      type: "IN_PROCESSING",
    };
    dispatch(action);
    try {
      //   axios
      //     .post(`${url}/question`, data, config)
      //     .then((response) => {
      //       if (response.status === 201) {
      //         let action = {
      //           type: "NEW_QUESION_ADDED",
      //           payload: {
      //             question_id: response.data.question_id,
      //           },
      //         };
      //         return dispatch(action);
      //       }
      //     })
      //     .catch((error) => {
      //       let action = {
      //         type: "NEW_QUESION_ADDED_ERROR",
      //         payload: {
      //           error: error.response.data,
      //         },
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {
      let action = {
        type: "NEW_QUESION_ADDED_ERROR",
        payload: {
          error: error.response.data,
        },
      };
      return dispatch(action);
    }
  };
}

export function questionsFiltered(filter) {
  return function (dispatch) {
    let action = {
      type: "ON_FILER",
      payload: {
        speciality: filter.speciality,
        branche: filter.branche,
        category: filter.category,
      },
    };
    return dispatch(action);
  };
}
export function clean_profile() {
  return function (dispatch) {
    let action = {
      type: "CLEAN_PROFILE",
    };
    return dispatch(action);
  };
}
