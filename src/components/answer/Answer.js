import React from "react";
import { Avatar, CardHeader, Chip, Tooltip } from "@material-ui/core";
import RateCountComponent from "../RateCount/RateCountComponent";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import { IconButton } from "@mui/material";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
import ThumbDownAltTwoToneIcon from "@mui/icons-material/ThumbDownAltTwoTone";
import parse from "html-react-parser";
import { numFormatter } from "../../helpers/helpers";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import { useDispatch } from "react-redux";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import {
  addCorrectAnswer,
  dislikeAnswer,
  likeAnswer,
  removeCorrectAnswer,
} from "../../redux/actions/evaluationActions";
export default function AnswerComponent(props) {
  const dispatch = useDispatch();
  const {
    fullname,
    answer,
    createdAt,
    answer_id,
    author_id,
    is_disliked,
    is_liked,
    total_likes,
    total_dislikes,
    is_correct,
    avatar,
    showCorrectAnsweButton,
  } = props;

  const onLikeQuestion = () => {
    dispatch(
      likeAnswer({
        is_liked: is_liked,
        is_disliked: is_disliked,
        answer_id: answer_id,
      })
    );
  };
  const onDislikeQuestion = () => {
    dispatch(
      dislikeAnswer({
        is_liked: is_liked,
        is_disliked: is_disliked,
        answer_id: answer_id,
      })
    );
  };

  const onHandleCorrectAnswer = () => {
    if (is_correct) {
      dispatch(removeCorrectAnswer({ answer_id: answer_id, is_correct: true }));
    } else {
      dispatch(addCorrectAnswer({ answer_id: answer_id, is_correct: false }));
    }
  };

  return (
    <div
      style={{
        padding: "0px",
        width: "100%",
        display: "inline-block",
        wordBreak: "break-word",
        position: "relative",
      }}
    >
      {/* <div class="badge-overlay">
            <span class="top-right badge green">Solution</span>
        </div> */}
      <div style={{ padding: "20px 10px" }}>
        <CardHeader
          avatar={<Avatar alt="Cindy Baker" src={avatar} />}
          title={
            <div>
              <a href={`/user?id=${author_id}`}>{fullname}</a>{" "}
            </div>
          }
          subheader={<i>Answered {"09 - 12 - 2009"}</i>}
        />

        <div
          style={{
            display: "flex",
            padding: "0px",
            alignItems: "center",
          }}
        >
          {/* <div style={{
                     flex:' 0 0 auto',
                     marginRight:  '16px',
             }}>
                <RateCountComponent 
                    rate={rate}
                    enabled={true}
                    onDown={(e) =>onDown(e)}
                    onUp={(e) => onUp(e)}
                    />
                 </div> */}
          <div>
            <div style={{ padding: "20px 0px" }}>{parse(`${answer}`)}</div>
            <ul className="reaction">
              <ul className="reaction">
                <li
                  className="reaction-item"
                  style={{ color: "gray", fontSize: 14 }}
                >
                  <Tooltip placement="top-start" title="Likes">
                    <IconButton
                      onClick={() =>
                        onLikeQuestion({
                          is_liked: is_liked,
                          is_disliked: is_disliked,
                        })
                      }
                    >
                      <ThumbUpAltTwoToneIcon
                        style={{
                          fontSize: 18,
                          color: is_liked == 1 ? "blue" : "gray",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  {numFormatter(total_likes)} &nbsp; &nbsp;
                  <Tooltip placement="top-start" title="Dislikes">
                    <IconButton
                      onClick={() =>
                        onDislikeQuestion({
                          is_liked: is_liked,
                          is_disliked: is_disliked,
                        })
                      }
                    >
                      <ThumbDownAltTwoToneIcon
                        style={{
                          fontSize: 18,
                          color: is_disliked == 1 ? "red" : "gray",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  {numFormatter(total_dislikes)} &nbsp; &nbsp;
                  {/* <VisibilityTwoToneIcon style={{fontSize: 18, marginBottom: -4}} /> {numFormatter(views)} &nbsp;  &nbsp;   */}
                  {showCorrectAnsweButton ? (
                    <Tooltip placement="top-start" title="Correct answer">
                      <IconButton
                        onClick={() =>
                          onHandleCorrectAnswer({
                            is_liked: is_liked,
                            is_disliked: is_disliked,
                          })
                        }
                      >
                        {is_correct ? (
                          <CheckCircleTwoToneIcon
                            style={{
                              fontSize: 18,
                              marginBottom: -4,
                              color: "#0e7201",
                            }}
                          />
                        ) : (
                          <CheckTwoToneIcon
                            style={{
                              fontSize: 18,
                              marginBottom: -4,
                              color: "gray",
                            }}
                          />
                        )}
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <>
                      {" "}
                      {is_correct ? (
                        <IconButton disabled>
                          {" "}
                          <CheckCircleTwoToneIcon
                            style={{
                              fontSize: 18,
                              marginBottom: -4,
                              color: "#0e7201",
                            }}
                          />{" "}
                        </IconButton>
                      ) : null}
                    </>
                  )}
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
