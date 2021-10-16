import React from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import FilterListTwoToneIcon from "@mui/icons-material/FilterListTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { questionsFiltered } from "../../redux/actions/questionsActions";
import {
  fetchBranch,
  fetchCategories,
  fetchSpecialities,
} from "../../redux/actions/categoriesActions";
export default function Filter() {
  const dispatch = useDispatch();
  const [state, setstate] = React.useState(false);
  const [filter, setFilter] = React.useState({
    speciality: localStorage.getItem("speciality") || "All",
    branch: localStorage.getItem("branch") || "All",
    category: localStorage.getItem("category") || "All",
  });
  const { specialities, categories, branchs } = useSelector(
    (state) => state.categoriesReducers
  );
  React.useEffect(() => {
    dispatch(fetchSpecialities());
    if (localStorage.getItem("speciality") !== "All") {
      dispatch(
        fetchBranch({ parent: Number(localStorage.getItem("speciality")) })
      );
      if (localStorage.getItem("branch") !== "All") {
        dispatch(
          fetchCategories({
            parent: Number(localStorage.getItem("branch")),
          })
        );
      }
    }
  }, []);
  const onFilter = () => {
    dispatch(questionsFiltered(filter));
  };

  const onChangeSpeciality = (e) => {
    localStorage.setItem("speciality", e.target.value);
    localStorage.setItem("branch", "All");
    localStorage.setItem("category", "All");
    dispatch(fetchBranch({ parent: Number(e.target.value) }));
    setFilter({
      speciality: e.target.value,
      branch: "All",
      category: "All",
    });
  };
  const onChangeBranch = (e) => {
    localStorage.setItem("branch", e.target.value);
    localStorage.setItem("category", "All");
    dispatch(fetchCategories({ parent: Number(e.target.value) }));
    setFilter({
      ...filter,
      branch: e.target.value,
      category: "All",
    });
  };
  const onChangeCategory = (e) => {
    localStorage.setItem("category", e.target.value);
    setFilter({ ...filter, category: e.target.value });
  };

  return (
    <>
      <div style={{ margin: "5px 0px " }}>
        <Card>
          <div style={{ fontSize: "14px", float: "left", margin: "15px 10px" }}>
            239 New Questions
          </div>
          <div style={{ float: "right" }}>
            <IconButton onClick={() => setstate(!state)}>
              <FilterListTwoToneIcon />
            </IconButton>
          </div>
        </Card>
      </div>
      <div className="transition" style={{ margin: "5px 0px " }}>
        <Card>
          <CardContent>
            <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
              <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter.speciality}
                onChange={(e) => onChangeSpeciality(e)}
              >
                <MenuItem value={"All"}>All</MenuItem>
                {(specialities || []).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.speciality}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {filter.speciality !== "All" ? (
              <>
                <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
                  <InputLabel fullWidth id="demo-simple-select-label">
                    Branch
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.branch}
                    onChange={(e) => onChangeBranch(e)}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    {(branchs || []).map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.branch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            ) : null}
            {filter.branch !== "All" ? (
              <>
                <FormControl style={{ minWidth: "100%", margin: "10px 0" }}>
                  <InputLabel fullWidth id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.category}
                    onChange={(e) => onChangeCategory(e)}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    {(categories || []).map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            ) : null}
            {/* <FormControl style={{minWidth: '100%', margin: '10px 0'}}> 
            <InputLabel fullWidth id="demo-simple-select-label">Sort</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter.category}
                onChange={(e) => setFilter({...filter, category: e.target.value})}
                >
                <MenuItem value={'recently questions'}>Recently questions</MenuItem>
                <MenuItem value={'Twenty'}>Twenty</MenuItem> 
                </Select>
            </FormControl> */}
            <Button
              style={{
                float: "right",
                height: 33,
                minWidth: 100,
                margin: "0 5px",
              }}
              color="primary"
              variant="contained"
              onClick={() => onFilter()}
            >
              Filter
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
