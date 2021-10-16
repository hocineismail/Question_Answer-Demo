import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AnswerComponent from "../../components/answer/Answer";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserCard from "../../components/cards/UserCard";
import QuestionComponent from "../../components/question/QuestionComponent";
import TabQuestions from "./TabQuestions";
import TabAnswers from "./TabAnswers";
import SectionFollowers from "../Follow/SectionFollowers";
import SectionFollowing from "../Follow/SectionFollowing";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function ContainerProfile({ id }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Answers" {...a11yProps(1)} />
          <Tab label="Folling" {...a11yProps(3)} />
          <Tab label="Followers" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TabQuestions id={id} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabAnswers id={id} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <SectionFollowers id={id} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SectionFollowing id={id} />
      </TabPanel>
    </div>
  );
}
