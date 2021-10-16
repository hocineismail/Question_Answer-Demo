import React from "react";
import UserCard from "../../components/cards/UserCard";
import { Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getParameterByName } from "../../helpers/helpers";
import { fetch_followers } from "../../redux/actions/followerActions";

export default function SectionFollowers({ id }) {
  const dispatch = useDispatch();
  const {
    followers,
    page,
    error,
    loading,
    hasMore,
    total_followers,
  } = useSelector((state) => state.followerReducers.followers);

  const [user_id, setuser_id] = React.useState();

  React.useEffect(() => {
    const _id = getParameterByName("id");
    if (_id) {
      setuser_id(_id);
      dispatch(fetch_followers({ id: _id, page: page }));
    } else {
      setuser_id(id);
      dispatch(fetch_followers({ id: id, page: page }));
    }
    return () => {
      dispatch({ type: "CLEAN_FOLLOWERS" });
    };
  }, [id]);

  return (
    <div>
      <h3>({total_followers}) Followers</h3>
      <hr />
      {(followers || []).map((item) => (
        <UserCard
          link={`/user?id=${item.following_id}`}
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
