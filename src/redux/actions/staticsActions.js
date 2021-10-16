import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetchStatics() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let action = {
      type: "ON_FETCHING_STATICS",
    };
    dispatch(action);
    try {
      // axios
      //   .get(`${url}/statics`, config)
      //   .then((response) => {
      //     let action = {
      //       type: "FETCH_STATICS",
      //       payload: {
      //         questions: response.data.questions,
      //         solved: response.data.solved,
      //         answers: response.data.answers,
      //         best_answers: response.data.best_answers,
      //         top_members: response.data.top_members,
      //         trend_questions: response.data.trend_questions,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } catch (error) {}
  };
}
