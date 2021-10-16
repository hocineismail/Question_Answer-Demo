import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../../components/question/QuestionComponent";
import { getParameterByName } from "../../helpers/helpers";
import { fetch_interest_questions } from "../../redux/actions/questionsActions";

export default function SectionInterestQuestions({ id }) {
  const dispatch = useDispatch();
  const [user_id, setuser_id] = React.useState();
  const [isLoading, setisLoading] = React.useState(true);
  const { questions, page, hasMore } = useSelector(
    (state) => state.questionsReducers
  );

  React.useEffect(() => {
    dispatch(fetch_interest_questions({ page: page || 0 }));
  }, []);

  React.useEffect(() => {
    if (!page === 0) {
      setisLoading(false);
    }
  }, [page]);
  // const fetchData = (page) => {
  //     dispatch(fetch_interest_questions({id: 1, page: page}))
  // }
  const onFetchData = () => {
    if (!isLoading) {
      setisLoading(true);
      dispatch(fetch_interest_questions({ page: page + 1 }));
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
          category={[item.speciality, item.branch, item.category]}
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
