import React from "react";
import LayoutComponent from "../../components/layout/LayoutComponent";
import AuthCard from "../../components/authCard/AuthCard";
import EditorText from "../../components/editorText/EditorText";
import axios from "axios";
// import { Button } from '@material-ui/core'
// import { useDispatch, useSelector } from 'react-redux';
import SectionQuestion from "./SectionQuestion";
import SectionAnswers from "./SectionAnswers";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { add_answer } from "../../redux/actions/answersActions";
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
export default function Question() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.editorReducers);
  const auth = localStorage.getItem("auth-token");
  const [answer, setanswer] = React.useState("");
  const onsubmit = (event) => {
    const data = {
      answer: answer,
      question_id: getParameterByName("id"),
    };
    dispatch(add_answer(data));
  };
  const onChangeEditor = (html) => {
    setanswer(html);
  };
  return (
    <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
      <SectionQuestion />
      <hr />
      {auth ? (
        <React.Fragment>
          <EditorText
            title={`${localStorage.getItem("fullname")}, do Write your anwser?`}
            onChangeEditor={onChangeEditor}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={() => onsubmit()}
            >
              ADD ANSWER
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <AuthCard />
      )}

      <SectionAnswers />
    </LayoutComponent>
  );
}
