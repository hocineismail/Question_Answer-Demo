import React from "react";
import UserCard from "../../components/cards/UserCard";
import { Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getParameterByName } from "../../helpers/helpers";
import { fetch_following } from "../../redux/actions/followerActions";

export default function SectionFollowing({ id }) {
  const dispatch = useDispatch();
  const {
    following,
    page,
    error,
    loading,
    hasMore,
    total_following,
  } = useSelector((state) => state.followerReducers.following);

  const [user_id, setuser_id] = React.useState();

  React.useEffect(() => {
    const _id = getParameterByName("id");
    if (_id) {
      setuser_id(_id);
      dispatch(fetch_following({ id: _id, page: page }));
    } else {
      setuser_id(id);
      dispatch(fetch_following({ id: id, page: page }));
    }
    return () => {
      dispatch({ type: "CLEAN_FOLLOWING" });
    };
  }, [id]);

  return (
    <div>
      <h3>({total_following}) following</h3>
      <hr />
      {(following || []).map((item) => (
        <UserCard
          link={`/user?id=${item.user_id}`}
          fullname={item.fullname}
          avatar={item.avatar}
          domain={item.domain}
        />
      ))}
      {hasMore ? (
        <React.Fragment>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
            >
              <Button
                style={{ height: 33, minWidth: 150, margin: "0 5px" }}
                color="inherit"
                variant="outlined"
              >
                Show More
              </Button>
            </div>
          )}
        </React.Fragment>
      ) : null}
    </div>
  );
}
