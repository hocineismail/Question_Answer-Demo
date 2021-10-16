import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import GradeTwoToneIcon from '@material-ui/icons/GradeTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: '12px',
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SidebarComponent() {
  const history = useHistory()
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const onPushTo = (path) => {
    if (localStorage.getItem('auth-token')) {
      history.push(path)
    }
  }
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
 
      className={classes.root}
    >
      <ListItem button component={RouterLink} to='/'>
        <ListItemIcon>
          <HomeTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button 
      // component={RouterLink} 
      onClick={() => onPushTo(`/user?id=${localStorage.getItem('user_id')}`)}
      // to={`/user?id=${localStorage.getItem('user_id')}`}
      >
        <ListItemIcon>
          <AccountCircleTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      <ListItem button  component={RouterLink} to='/settings'>
        <ListItemIcon>
          <SettingsTwoToneIcon /> 
        </ListItemIcon> 
        <ListItemText primary="Setting" />
      </ListItem>
      <ListItem button  component={RouterLink} to='/notifications'>
        <ListItemIcon>
          <NotificationsActiveTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
        <Badge badgeContent={224} color="primary"/>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ContactSupportTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Questions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}  component={RouterLink} to='/add-question'>
            <ListItemIcon>
              <AddTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Post Question"  />
          </ListItem>
          <ListItem button className={classes.nested}  component={RouterLink} to='/my-questions'>
            <ListItemIcon>
              <QuestionAnswerTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="My Questions" />
          </ListItem>
          <ListItem button className={classes.nested}  component={RouterLink} to='/interesting-questions'>
            <ListItemIcon>
              <SentimentVerySatisfiedTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Interesting questions" />
          </ListItem>
          <ListItem button className={classes.nested} component={RouterLink} to='/my-answers'>
            <ListItemIcon>
              <EmojiObjectsTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="My Answers" />
          </ListItem> 
        </List>
      </Collapse>
      <ListItem button  component={RouterLink} to='/followers'>
        <ListItemIcon>
          <GradeTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Followers" />
      </ListItem>

      <ListItem button  component={RouterLink} to='/following'>
        <ListItemIcon>
          <PeopleAltTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Following" />
      </ListItem>

    </List>
  );
}