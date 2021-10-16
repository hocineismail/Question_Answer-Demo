import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function likeQuestion({ question_id, is_liked, is_disliked }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      is_liked: is_liked,
      is_disliked: is_disliked,
      question_id: question_id,
    };
    if (is_disliked == 1) {
      let action = {
        type: "REMOVE_DISLIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    }
    if (is_liked == 1) {
      let action = {
        type: "REMOVE_LIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    } else {
      let action = {
        type: "POST_LIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    }
    try {
      axios
        .post(`${url}/like-question`, data, config)
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error.response);
          let action = {
            type: "REMOVE_LIKE_QUESTION",
          };
          return dispatch(action);
        });
    } catch (error) {}
  };
}

export function dislikeQuestion({ question_id, is_liked, is_disliked }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      question_id: question_id,
      is_liked: is_liked,
      is_disliked: is_disliked,
    };
    if (is_liked == 1) {
      let action = {
        type: "REMOVE_LIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    }

    if (is_disliked == 1) {
      let action = {
        type: "REMOVE_DISLIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    } else {
      let action = {
        type: "POST_DISLIKE_QUESTION",
        payload: {
          question_id: question_id,
        },
      };
      dispatch(action);
    }

    try {
      axios
        .post(`${url}/dislike-question`, data, config)
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error.response);
          let action = {
            type: "POST_DISLIKE_QUESTION_ERROR",
          };
          return dispatch(action);
        });
    } catch (error) {}
  };
}

export function likeAnswer({ is_liked, is_disliked, answer_id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    const data = {
      is_liked: is_liked,
      is_disliked: is_disliked,
      answer_id: answer_id,
    };
    if (is_disliked == 1) {
      let action = {
        type: "REMOVE_DISLIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    }
    if (is_liked == 1) {
      let action = {
        type: "REMOVE_LIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    } else {
      let action = {
        type: "POST_LIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    }
    try {
      axios
        .post(`${url}/like-answer`, data, config)
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error.response);
          let action = {
            type: "REMOVE_LIKE_ANSWER",
          };
          return dispatch(action);
        });
    } catch (error) {}
  };
}
export function dislikeAnswer({ is_liked, is_disliked, answer_id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      is_liked: is_liked,
      is_disliked: is_disliked,
      answer_id: answer_id,
    };
    if (is_liked == 1) {
      let action = {
        type: "REMOVE_LIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    }

    if (is_disliked == 1) {
      let action = {
        type: "REMOVE_DISLIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    } else {
      let action = {
        type: "POST_DISLIKE_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    }

    try {
      axios
        .post(`${url}/dislike-answer`, data, config)
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error.response);
          let action = {
            type: "REMOVE_LIKE_ANSWER",
          };
          return dispatch(action);
        });
    } catch (error) {}
  };
}
export function addCorrectAnswer({ answer_id, is_correct }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      is_correct: !is_correct,
      answer_id: answer_id,
    };
    if (!is_correct) {
      let action = {
        type: "ADD_BEST_ANSWER",
        payload: { answer_id: answer_id },
      };
      dispatch(action);
    }

    try {
      axios
        .patch(`${url}/best-answer`, data, config)
        .then((response) => {
          console.log(response);
          return;
        })
        .catch((error) => {
          console.log(error.response);
          let action = {
            type: "REMOVE_BEST_ANSWER",
          };
          return dispatch(action);
        });
    } catch (error) {
      console.log(error.response);
      let action = {
        type: "REMOVE_BEST_ANSWER",
      };
      return dispatch(action);
    }
  };
}
export function removeCorrectAnswer({ answer_id }) {}
