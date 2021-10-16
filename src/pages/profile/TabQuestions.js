import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../../components/question/QuestionComponent";
import { fetch_questions_by_user } from "../../redux/actions/questionsActions";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function TabQuestions({ id }) {
  const dispatch = useDispatch();
  const [user_id, setuser_id] = React.useState();
  const [isLoading, setisLoading] = React.useState(true);
  const { questions, page, hasMore } = useSelector(
    (state) => state.userReducers.questions
  );

  React.useEffect(() => {
    if (id) {
      setuser_id(id);
      dispatch(fetch_questions_by_user({ id: id, page: page }));
    }
  }, [id]);
  React.useEffect(() => {
    if (!page === 0) {
      setisLoading(false);
    }
  }, [page]);
  // const fetchData = (page) => {
  //     dispatch(fetch_questions_by_user({id: 1, page: page}))
  // }
  const onFetchData = () => {
    if (!isLoading) {
      setisLoading(true);
      dispatch(fetch_questions_by_user({ id: user_id, page: page + 1 }));
    }
  };
  // if (!loading) {
  return (
    <div>
      {(questions || []).map((item) => (
        <QuestionComponent
          key={item.question_id}
          question_id={item.question_id}
          user_id={item.user_id}
          fullname={item.fullname}
          question={item.title}
          discription={item.description}
          createdAt={item.publish_at}
          views={1243}
          rate={item.rate}
          likes={item.total_likes}
          dislikes={item.total_dislikes}
          isInterested={item.is_interested}
          isFollowed={item.is_followed}
          is_liked={item.is_liked}
          is_disliked={item.is_disliked}
          total_answers={item.total_answers}
          total_correct_answers={item.total_correct_answers}
          rateFunctionIsEnabled={false}
          category={[item.speciality, item.branche, item.category]}
          link={true}
        />
      ))}

      {hasMore ? (
        <>
          {" "}
          <hr />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ height: 33, minWidth: 150, margin: "0 5px" }}
              color="inherit"
              variant="outlined"
              onClick={() => onFetchData()}
            >
              Show More
            </Button>
          </div>
        </>
      ) : (
        <>
          {questions.length !== 0 ? (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>
              <b>this user have never poster an questions</b>
            </p>
          )}
        </>
      )}
    </div>
  );
  // } else {
  //     return  <div style={{textAlign: 'center'}}>
  //          <div class="lds-hourglass"></div>
  //     </div>
  // }
}
