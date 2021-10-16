import React from "react";
import LayoutComponent from "../../components/layout/LayoutComponent";
import EditorText from "../../components/editorText/EditorText";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { addNewQuestion } from "../../redux/actions/questionsActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  fetchBranch,
  fetchCategories,
  fetchSpecialities,
} from "../../redux/actions/categoriesActions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function AddQuestion() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setstate] = React.useState(false);

  const { specialities, categories, branchs } = useSelector(
    (state) => state.categoriesReducers
  );
  React.useEffect(() => {
    dispatch(fetchSpecialities());
  }, []);
  const onform = () => {
    // dispatch(questionform(form));
  };

  const onChangeSpeciality = (e) => {
    localStorage.setItem("speciality", e.target.value);
    localStorage.setItem("branch", "All");
    localStorage.setItem("category", "All");
    dispatch(fetchBranch({ parent: Number(e.target.value) }));
    setform({
      ...form,
      speciality_id: e.target.value,
      branch_id: "All",
      category_id: "All",
    });
  };
  const onChangeBranch = (e) => {
    localStorage.setItem("branch", e.target.value);
    localStorage.setItem("category", "All");
    dispatch(fetchCategories({ parent: Number(e.target.value) }));
    setform({
      ...form,
      branch_id: e.target.value,
      category_id: "All",
    });
  };
  const onChangeCategory = (e) => {
    localStorage.setItem("category", e.target.value);
    setform({ ...form, category: e.target.value });
  };
  const { loading, new_question_id } = useSelector(
    (state) => state.questionsReducers
  );
  const [form, setform] = React.useState({
    title: "",
    description: "",
    speciality_id: "",
    branch_id: "",
    category_id: "",
  });
  const onsubmit = (event) => {
    if (loading) return;

    dispatch(addNewQuestion(form));
  };

  React.useEffect(() => {
    if (new_question_id) {
      history.push(`/question?id=${new_question_id}`);
    }
    return () => {
      dispatch({ type: "CLEAN_ADD_QUESTION" });
    };
  }, [new_question_id]);

  const onChangeEditor = (html) => {
    setform({ ...form, description: html });
  };
  return (
    <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
      <TextField
        label="Your Question"
        fullWidth
        value={form.title}
        onChange={(e) => setform({ ...form, title: e.target.value })}
      />
      <EditorText onChangeEditor={onChangeEditor} title="Write More Details" />

      <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
        <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.speciality_id}
          onChange={(e) => onChangeSpeciality(e)}
        >
          {(specialities || []).map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.speciality}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
        <InputLabel fullWidth id="demo-simple-select-label">
          Branch
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.branch_id}
          onChange={(e) => onChangeBranch(e)}
        >
          {(branchs || []).map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.branch}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
        <InputLabel fullWidth id="demo-simple-select-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.category_id}
          onChange={(e) => setform({ ...form, category_id: e.target.value })}
        >
          {(categories || []).map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        style={{ float: "right", height: 33, minWidth: 100, margin: "0 5px" }}
        color="primary"
        variant="contained"
        disbaled={loading}
        onClick={() => onsubmit()}
      >
        {loading ? <CircularProgress size={15} color={"white"} /> : "Publish"}
      </Button>
    </LayoutComponent>
  );
}
