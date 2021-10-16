import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../../components/question/QuestionComponent";
import {
  fetch_questions,
  clean_profile,
} from "../../redux/actions/questionsActions";
import InfiniteScroll from "react-infinite-scroll-component";

export default function QuestionsSection() {
  const dispatch = useDispatch();
  const { loading, questions, page, hasMore } = useSelector(
    (state) => state.questionsReducers
  );
  const { filter } = useSelector((state) => state.questionsReducers);
  React.useEffect(() => {
    if (filter) dispatch(fetch_questions({ page: page, filter: filter }));
    return () => {
      dispatch(clean_profile());
    };
  }, [filter]);

  // const fetchData = (page) => {
  //     dispatch(fetch_questions({page: page}))
  // }
  const onFetchData = () => {
    if (!loading) {
      dispatch(fetch_questions({ page: page + 1, filter: filter }));
    }
  };
  // if (!loading) {
  return (
    <div>
      <InfiniteScroll
        dataLength={questions ? questions.length : 0} //This is important field to render the next data
        next={() => onFetchData()}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={() => alert(5)}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={3}
        // pullDownToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {(questions || []).map((item) => (
          <QuestionComponent
            key={item.question_id}
            question_id={item.question_id}
            user_id={item.user_id}
            fullname={item.fullname}
            avatar={item.avatar}
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
      </InfiniteScroll>
    </div>
  );
  // } else {
  //     return  <div style={{textAlign: 'center'}}>
  //          <div class="lds-hourglass"></div>
  //     </div>
  // }
}
