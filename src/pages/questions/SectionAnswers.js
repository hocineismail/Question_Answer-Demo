import React from "react";

import AnswerComponent from "../../components/answer/Answer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetch_answers,
  clean_answers,
} from "../../redux/actions/answersActions";

import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function SectionAnswers() {
  const { user_id } = useSelector((state) => state.questionsReducers.question);
  const dispatch = useDispatch();
  const id = getParameterByName("id");
  const { loading, page, answers, hasMore } = useSelector(
    (state) => state.answersReducers
  );
  React.useEffect(() => {
    dispatch(fetch_answers({ id: id, page: 0 }));
    return () => {
      dispatch(clean_answers());
    };
  }, []);

  const onFetch = () => {
    if (!loading) {
      dispatch(fetch_answers({ id: id, page: page + 1 }));
    }
  };

  return (
    <InfiniteScroll
      dataLength={answers.length} //This is important field to render the next data
      next={() => onFetch()}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      //   refreshFunction={() => alert(5)}
      //   pullDownToRefresh
      //   pullDownToRefreshThreshold={3}
      //   pullDownToRefreshContent={
      //       <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      //   }
      //   releaseToRefreshContent={
      //       <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      //   }
    >
      {answers.map((item) => (
        <AnswerComponent
          showCorrectAnsweButton={
            user_id == localStorage.getItem("user_id") &&
            item.author_id != localStorage.getItem("user_id")
          }
          fullname={item.fullname}
          answer={item.answer}
          rate={item.rate}
          avatar={item.avatar}
          answer_id={item.answers_id}
          author_id={item.author_id}
          createdAt={item.answers_date}
          currentUserIsVoted={item.currentUserIsVoted}
          total_likes={item.total_likes}
          total_dislikes={item.total_dislikes}
          is_correct={item.is_correct}
          is_liked={item.is_liked}
          is_disliked={item.is_disliked}
        />
      ))}
    </InfiniteScroll>
  );
}
