import React from "react";

import QuestionComponent from "../../components/question/QuestionComponent";

import { useDispatch, useSelector } from "react-redux";
import { fetch_question } from "../../redux/actions/questionsActions";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function SectionQuestion({ id }) {
  const dispatch = useDispatch();
  const { loading, question } = useSelector((state) => state.questionsReducers);
  React.useEffect(() => {
    const id = getParameterByName("id");
    dispatch(fetch_question({ id: id }));
  }, []);

  return (
    <QuestionComponent
      key={question.question_id}
      question_id={question.question_id}
      fullname={question.fullname}
      question={question.title}
      discription={question.description || <h1>loading</h1>}
      createdAt={question.publish_At}
      views={1243}
      avatar={question.avatar}
      likes={question.total_likes}
      dislikes={question.total_dislikes}
      author_id={question.user_id}
      rate={question.rate}
      answers={question.total_answers}
      is_disliked={question.is_disliked}
      is_liked={question.is_liked}
      rateFunctionIsEnabled={false}
      total_correct_answers={Number(question.total_correct_answers)}
      currentUserIsVoted={"up"}
      category={[question.speciality, question.branch, question.category]}
      link={false}
      rateFunctionIsEnabled={true}
    />
  );
}
