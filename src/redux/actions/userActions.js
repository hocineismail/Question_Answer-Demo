import axios from "axios";
const url = process.env.REACT_APP_DOMAIN || "http://localhost:4001";

export function fetch_my_informations() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    try {
      // axios
      //   .get(`${url}/my-account`, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "FETCH_MY_ACCOUNT",
      //       payload: {
      //         fullname: response.data[0].fullname,
      //         email: response.data[0].email,
      //         domain: response.data[0].domain,
      //         avatar: response.data[0].avatar,
      //         cover: response.data[0].cover,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FETCH_MY_ACCOUNT_ERROR",
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function updateCover({ urlOldCover, urlCover }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      urlCover: urlCover,
    };
    let action = {
      type: "UPDATE_COVER",
      payload: {
        cover: urlCover,
      },
    };
    dispatch(action);
    try {
      // axios
      //   .patch(`${url}/cover`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "ERROR_UPDATE_COVER",
      //       payload: {
      //         cover: urlCover,
      //       },
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function updateAvatar({ urlOldAvatar, urlAvatar }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };
    const data = {
      urlAvatar: urlAvatar,
    };
    let action = {
      type: "UPDATE_AVATAR",
      payload: {
        avatar: urlAvatar,
      },
    };
    dispatch(action);
    try {
      // axios
      //   .patch(`${url}/avatar`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "ERROR_UPDATE_AVATAR",
      //       payload: {
      //         avatar: urlOldAvatar,
      //       },
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function update_informations(data) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    dispatch({ type: "NEW_REQUEST_INFORMATIONS" });
    try {
      // axios
      //   .patch(`${url}/my-account`, data, config)
      //   .then((response) => {
      //     console.log(response);
      //     let action = {
      //       type: "UPDATE_ACCOUNT",
      //       payload: {
      //         questions: response.data,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     let action = {
      //       type: "UPDATE_ACCOUNT_ERROR",
      //       payload: error.response.data,
      //     };
      //     console.log(action);
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}

export function fetch_user({ id }) {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth-token"),
      },
    };

    try {
      // axios
      //   .get(`${url}/user?id=${id}`, config)
      //   .then((response) => {
      //     let action = {
      //       type: "FETCH_USER",
      //       payload: {
      //         fullname: response.data[0].fullname,
      //         domain: response.data[0].domain,
      //         avatar: response.data[0].avatar,
      //         cover: response.data[0].cover,
      //         is_followed: response.data[0].is_followed,
      //       },
      //     };
      //     return dispatch(action);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     let action = {
      //       type: "FETCH_USER_ERROR",
      //     };
      //     return dispatch(action);
      //   });
    } catch (error) {}
  };
}
