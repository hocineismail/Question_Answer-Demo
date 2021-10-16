import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetchSpecialities() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "ON_CATEGORY_LOADING" };
    dispatch(action);
    try {
      //   axios
      //     .get(`${url}/specialities?page=0&rows=1000`, config)
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_SPECIALITIES",
      //         payload: { specialities: response.data.specialities },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       let action = {
      //         type: "FETCH_FOLLOWERS_ERROR",
      //         payload: error.response.data,
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}
export function fetchBranch({ parent }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "ON_CATEGORY_LOADING" };
    dispatch(action);
    try {
      //   axios
      //     .get(`${url}/branchs?parent=${parent}&page=0&rows=1000`, config)
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_BRANCHS",
      //         payload: { branchs: response.data.branchs },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       let action = {
      //         type: "FETCH_CATEGORIES_ERROR",
      //         payload: error.response.data,
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}
export function fetchCategories({ parent }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    let action = { type: "ON_CATEGORY_LOADING" };
    dispatch(action);
    try {
      //   axios
      //     .get(`${url}/categories?parent=${parent}&page=0&rows=1000`, config)
      //     .then((response) => {
      //       console.log(response);
      //       let action = {
      //         type: "FETCH_CATEGORIES",
      //         payload: { categories: response.data.categories },
      //       };
      //       return dispatch(action);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       let action = {
      //         type: "FETCH_CATEGORIES_ERROR",
      //         payload: error.response.data,
      //       };
      //       return dispatch(action);
      //     });
    } catch (error) {}
  };
}
