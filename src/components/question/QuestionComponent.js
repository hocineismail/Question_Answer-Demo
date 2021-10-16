import React from "react";
import { Avatar, CardHeader, Chip } from "@material-ui/core";
import RateCountComponent from "../RateCount/RateCountComponent";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "moment-timezone";
import parse from "html-react-parser";
import "./QuestionComponent.css";
import Moment from "react-moment";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
import ThumbDownAltTwoToneIcon from "@mui/icons-material/ThumbDownAltTwoTone";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import { numFormatter } from "../../helpers/helpers";
import Menus from "../menus/Menus";
import { useDispatch } from "react-redux";
import {
  dislikeQuestion,
  likeQuestion,
} from "../../redux/actions/evaluationActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export default function QuestionComponent(props) {
  const dispatch = useDispatch();
  const {
    user_id,
    question_id,
    fullname,
    question,
    discription,
    createdAt,
    views,
    likes,
    dislikes,
    answers,
    total_correct_answers,
    category,
    link,
    rate,
    total_answers,
    is_liked,
    is_disliked,
    isInterested,
    isFollowed,
    avatar,
    rateFunctionIsEnabled,
  } = props;
  const onLikeQuestion = ({ is_liked, is_disliked }) => {
    if (localStorage.getItem("user_id")) {
      dispatch(
        likeQuestion({ question_id: question_id, is_liked, is_disliked })
      );
    } else {
      Swal.fire({
        icon: "info",
        html: `<div>You have to <a href="/login" >Log In</a> Or <a  href="/signup">Sign Un</a> to vote</div>`,
        showConfirmButton: false,
      });
    }
  };

  const onDislikeQuestion = () => {
    if (localStorage.getItem("user_id")) {
      dispatch(
        dislikeQuestion({ question_id: question_id, is_liked, is_disliked })
      );
    } else {
      Swal.fire({
        icon: "info",
        html: `<div>You have to <a href="/login" >Log In</a> Or <a  href="/signup">Sign Un</a> to vote</div>`,
        confirmButtonText: "Go Back",
      });
    }
  };

  if (link) {
    return (
      <div>
        <div
          style={{
            position: "relative",
            padding: "10px",
            backgroundColor: "white",
            borderBottom: "1px solid rgb(226, 226, 226)",
          }}
        >
          {Number(localStorage.getItem("user_id")) !== Number(user_id) ? (
            <div
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <Menus
                user_id={user_id}
                question_id={question_id}
                isInterested={isInterested}
                isFollowed={isFollowed}
              />
            </div>
          ) : null}
          <CardHeader
            avatar={
              <Avatar
                alt="Cindy Baker"
                style={{ width: 50, height: 50 }}
                src={avatar}
              />
            }
            title={
              <h3
                style={{
                  lineHeight: "20px",
                  marginBottom: "5px",
                  marginTop: 0,
                }}
              >
                {question}
              </h3>
            }
            subheader={
              <div>
                <b>
                  <a
                    href={`/user?id=${user_id}`}
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    {fullname}
                  </a>
                </b>{" "}
                |
                <i>
                  {" "}
                  Asked <Moment format="YYYY/MM/DD"> {createdAt}</Moment>
                </i>
              </div>
            }
          />
          <div>
            <div>
              <p>{parse(`${discription}`)}</p>
              <div>
                {(category || []).map((item) => (
                  <Chip variant="outlined" size="small" label={item} />
                ))}
              </div>

              <br />
              <div style={{ textAlign: "center", width: "100%" }}>
                <Link
                  to={`/question?id=${question_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Read More
                </Link>
              </div>

              <div>
                <ul className="reaction">
                  <li
                    className="reaction-item"
                    style={{ color: "gray", fontSize: 14 }}
                  >
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
                    {numFormatter(likes)} &nbsp; &nbsp;
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
                    {numFormatter(dislikes)} &nbsp; &nbsp;
                    <IconButton>
                      <ChatBubbleTwoToneIcon
                        style={{ color: "gray", fontSize: 18 }}
                      />
                    </IconButton>
                    {numFormatter(total_answers)} &nbsp; &nbsp;
                    {/* <VisibilityTwoToneIcon style={{fontSize: 18, marginBottom: -4}} /> {numFormatter(views)} &nbsp;  &nbsp;   */}
                    {Number(total_correct_answers) !== 0 ? (
                      <>
                        {" "}
                        <EmojiObjectsTwoToneIcon
                          style={{
                            fontSize: 18,
                            marginBottom: -4,
                            color: "#0e7201",
                          }}
                        />
                        {numFormatter(total_correct_answers)} &nbsp; &nbsp;
                      </>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "relative",
          padding: "10px",
          backgroundColor: "white",
          borderBottom: "1px solid rgb(226, 226, 226)",
        }}
      >
        {Number(localStorage.getItem("user_id")) !== Number(user_id) ? (
          <div
            style={{
              position: "absolute",
              right: 0,
            }}
          >
            <Menus
              user_id={user_id}
              question_id={question_id}
              isInterested={isInterested}
              isFollowed={isFollowed}
            />
          </div>
        ) : null}
        <CardHeader
          avatar={
            <Avatar
              alt="Cindy Baker"
              style={{ width: 50, height: 50 }}
              src={avatar}
            />
          }
          title={
            <h3
              style={{ lineHeight: "20px", marginBottom: "5px", marginTop: 0 }}
            >
              {question}
            </h3>
          }
          subheader={
            <div>
              <b>
                <a
                  href={`/user?id=${user_id}`}
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  {fullname}
                </a>
              </b>{" "}
              |
              <i>
                {" "}
                Asked <Moment format="YYYY/MM/DD"> {createdAt}</Moment>
              </i>
            </div>
          }
        />
        <div
          style={{
            display: "flex",
            padding: "0px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: " 0 0 auto",
              marginLeft: "0px",
            }}
          >
            {/* <RateCountComponent 
                        rate={rate}
                        enabled={rateFunctionIsEnabled}
                        // onDown={(e) =>onDown(e)}
                        // onUp={(e) => onUp(e)}
                    /> */}
          </div>
          <div>
            <p>{parse(`${discription}`)}</p>
            {(category || []).map((item) => (
              <Chip variant="outlined" size="small" label={item} />
            ))}

            <div>
              <ul className="reaction">
                <li
                  className="reaction-item"
                  style={{ color: "gray", fontSize: 14 }}
                >
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
                  {numFormatter(likes)} &nbsp; &nbsp;
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
                  {numFormatter(dislikes)} &nbsp; &nbsp;
                  <IconButton>
                    <ChatBubbleTwoToneIcon
                      style={{ color: "gray", fontSize: 18 }}
                    />
                  </IconButton>
                  {numFormatter(total_answers)} &nbsp; &nbsp;
                  {/* <VisibilityTwoToneIcon style={{fontSize: 18, marginBottom: -4}} /> {numFormatter(views)} &nbsp;  &nbsp;   */}
                  {Number(total_correct_answers) !== 0 ? (
                    <>
                      {" "}
                      <EmojiObjectsTwoToneIcon
                        style={{
                          fontSize: 18,
                          marginBottom: -4,
                          color: "#0e7201",
                        }}
                      />
                      {numFormatter(total_correct_answers)} &nbsp; &nbsp;
                    </>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
