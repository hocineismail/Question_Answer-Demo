const initialState = {
  followers: {
    total_followers: 0,
    followers: null,
    hasMore: true,
    loading: true,
    page: 0,
    error: {
      status: false,
      errors: [],
    },
  },
  following: {
    total_following: 0,
    following: null,
    hasMore: false,
    loading: true,
    page: 0,
    error: {
      status: false,
      errors: [],
    },
  },
};

export default function adminsReducers(state = initialState, action) {
  switch (action.type) {
    case "PRE_FETCH_FOLLOWERS":
      return {
        ...state,
        followers: {
          ...state.followers,
          error: {
            status: false,
            errors: null,
          },
        },
      };
    case "PRE_FETCH_FOLLOWING":
      return {
        ...state,
        following: {
          ...state.following,
          error: {
            status: false,
            errors: null,
          },
        },
      };
    case "FETCH_FOLLOWERS":
      return {
        ...state,
        followers: {
          ...state.followers,
          total_followers: action.payload.total_followers,
          followers: action.payload.followers,
          hasMore: action.payload.hasMore,
          loading: false,
        },
      };
    case "FETCH_FOLLOWERS_ERROR":
      return {
        ...state,
        followers: {
          ...state.followers,
          loading: false,
          error: {
            status: true,
            errors: action.payload,
          },
        },
      };
    case "FETCH_FOLLOWING":
      console.log(action.payload);
      return {
        ...state,
        following: {
          ...state.following,
          total_following: action.payload.total_following,
          following: action.payload.following,
          hasMore: action.payload.hasMore,
          loading: false,
        },
      };
    case "FETCH_FOLLOWING_ERROR":
      return {
        ...state,
        followers: {
          ...state.followers,
          loading: false,
          error: {
            status: true,
            errors: action.payload,
          },
        },
      };
    case "CLEAN_FOLLOWERS":
      return {
        ...state,
        followers: {
          total_followers: 0,
          followers: null,
          hasMore: true,
          loading: true,
          page: 0,
          error: {
            status: false,
            errors: [],
          },
        },
      };
    case "CLEAN_FOLLOWING":
      return {
        ...state,
        following: {
          total_following: 0,
          following: null,
          hasMore: false,
          loading: true,
          page: 0,
          error: {
            status: false,
            errors: [],
          },
        },
      };
    default:
      return state;
  }
}
