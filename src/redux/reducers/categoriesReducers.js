const initialState = {
  specialities: [],
  branchs: [],
  categories: [],
  loading: true,
  // rows_per_page: 5
};

export default function categoriesReducers(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SPECIALITIES":
      return {
        ...state,
        specialities: [...state.specialities, ...action.payload.specialities],
        branchs: [],
        categories: [],
      };
    case "FETCH_BRANCHS":
      return {
        ...state,
        branchs: action.payload.branchs,
        categories: [],
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
      };
    case "ON_CATEGORY_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
