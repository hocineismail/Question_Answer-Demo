import React from "react";
import LayoutComponent from "../../components/layout/LayoutComponent";
import "./Profile.css";
import { Avatar, Button, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AnswerComponent from "../../components/answer/Answer";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import SidebarRight from "./sidebarRight";
import UserCard from "../../components/cards/UserCard";
import QuestionComponent from "../../components/question/QuestionComponent";
import ContainerProfile from "./ContainerProfile";
import SectionsInformation from "./SectionsInformation";
import SidebarRightComponent from "../../components/sidebar/SidebarRightComponent";

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
}));

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

  const classes = useStyles();

  return (
    <div>
      <LayoutComponent
        sidebar={true}
        sidebarRight={<SidebarRightComponent removeAskQUestion={true} />}
        component={<SectionsInformation id={getParameterByName("id")} />}
      >
        <ContainerProfile id={getParameterByName("id")} />
      </LayoutComponent>
    </div>
  );
}
