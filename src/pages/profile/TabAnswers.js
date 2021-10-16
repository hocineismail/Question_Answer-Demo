import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AnswerComponent from "../../components/answer/Answer";

import { fetch_answers_by_user } from "../../redux/actions/answersActions";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function TabAnswers({ id }) {
  const dispatch = useDispatch();
  const [user_id, setuser_id] = React.useState();
  const [isLoading, setisLoading] = React.useState(true);
  const { answers, page, hasMore } = useSelector(
    (state) => state.userReducers.answers
  );

  React.useEffect(() => {
    if (id) {
      setuser_id(id);
      dispatch(fetch_answers_by_user({ id: id, page: page }));
    }
  }, [id]);
  React.useEffect(() => {
    setisLoading(false);
  }, [page]);
  // const fetchData = (page) => {
  //     dispatch(fetch_answers_by_user({id: 1, page: page}))
  // }
  const onFetchData = () => {
    if (!isLoading) {
      setisLoading(true);
      dispatch(fetch_answers_by_user({ id: id, page: page + 1 }));
    }
  };

  // if (!loading) {
  return (
    <div>
      {(answers || []).map((item) => (
        <AnswerComponent
          fullname={item.fullname}
          answer={item.answer}
          rate={item.rate}
          author_id={item.author_id}
          createdAt={item.answers_date}
          currentUserIsVoted={item.currentUserIsVoted}
          rate={item.rate}
        />
      ))}

      {hasMore ? (
        <>
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
          {answers.length !== 0 ? (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>
              <b>this user have never poster an answers</b>
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
