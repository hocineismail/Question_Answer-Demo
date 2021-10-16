const initialState = {
  answers: [
    {
      answers_id: 93,
      answer: "<p>juste a test</p>",
      source_img: null,
      rate: 0,
      answers_date: "2021-10-15T23:00:00.000Z",
      fullname: "ismail hocine",
      avatar: null,
      question_id: 73,
      is_correct: null,
      author_id: 97,
      total_likes: "1",
      total_dislikes: "0",
      is_disliked: "0",
      is_liked: "1",
    },
  ],
  page: 0,
  loading: false,
  hasMore: false,
  question: null,
  answed_added: false,
  // rows_per_page: 5
};

export default function answersReducers(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ANSWERS":
      let answers = action.payload.answers;
      return {
        ...state,
        answers: [...state.answers, ...answers],
        page: action.payload.page,
        loading: false,
        hasMore: action.payload.hasMore,
      };
    case "ON_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_ANSWER":
      return {
        ...state,
        loading: false,
        answed_added: true,
        answers: [action.payload.answer, ...state.answers],
      };
    case "POST_LIKE_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.total_likes = Number(item.total_likes) + 1;
            item.is_liked = "1";
          }
          return item;
        }),
      };
    case "REMOVE_LIKE_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.total_likes = Number(item.total_likes) - 1;
            item.is_liked = "0";
          }
          return item;
        }),
      };
    case "POST_DISLIKE_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.total_dislikes = Number(item.total_dislikes) + 1;
            item.is_disliked = "1";
          }
          return item;
        }),
      };
    case "REMOVE_DISLIKE_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.total_dislikes = Number(item.total_dislikes) - 1;
            item.is_disliked = "0";
          }
          return item;
        }),
      };
    case "ADD_BEST_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.is_correct = true;
          }
          return item;
        }),
      };
    case "REMOVE_BEST_ANSWER":
      return {
        ...state,
        answers: state.answers.map((item, index) => {
          if (item.answers_id === action.payload.answer_id) {
            item.is_correct = false;
          }
          return item;
        }),
      };
    case "CLEAN_ANSWERS":
      return {
        answers: [],
        page: 0,
        loading: true,
        hasMore: true,
        question: null,
      };
    default:
      return state;
  }
}
