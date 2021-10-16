const initialState = {
  loading: true,
  questions: null,
  solved: null,
  answers: null,
  best_answers: null,
  top_members: [
    {
      user_id: 94,
      fullname: "Create",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      total_questions: "4",
      total_answers: "2",
      answering_rank: "2",
    },
    {
      user_id: 97,
      fullname: "ismail hocine",
      avatar: null,
      total_questions: "1",
      total_answers: "1",
      answering_rank: "3",
    },
    {
      user_id: 95,
      fullname: "ismail hocine",
      avatar:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80",
      total_questions: "1",
      total_answers: "1",
      answering_rank: "3",
    },
  ],
  trend_questions: [
    {
      question_id: 70,
      title: "Create Create Create",
      total_answers: "2",
      answering_rank: "2",
    },
    {
      question_id: 71,
      title: "ismail hocine",
      total_answers: "1",
      answering_rank: "3",
    },
    {
      question_id: 73,
      title: "What is  Node.js is an open-source?",
      total_answers: "1",
      answering_rank: "3",
    },
  ],
};

export default function staticsReducers(state = initialState, action) {
  switch (action.type) {
    case "ON_FETCHING_STATICS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_STATICS":
      return {
        ...state,
        loading: false,
        questions: action.payload.questions,
        solved: action.payload.solved,
        answers: action.payload.answers,
        best_answers: action.payload.best_answers,
        top_members: action.payload.top_members,
        trend_questions: action.payload.trend_questions,
      };
    default:
      return state;
  }
}
