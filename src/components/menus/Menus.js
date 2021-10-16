import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import { useDispatch } from 'react-redux';
import { follow_question, follow_user } from '../../redux/actions/followerActions';
import { IconButton } from '@material-ui/core';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Menus({
  isInterested, 
  isFollowed, 
  user_id, 
  question_id
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onFollow = () => {
    alert(user_id)
    dispatch(follow_user({user_id}))
    // NotificationManager.success('Success message', 'Title here');
    handleClose()
  }

  const onInterest = () => {
    dispatch(follow_question({question_id}))
    // NotificationManager.success('Success message', 'Title here');
    handleClose()
  }
  return (
    <div>
      <IconButton 
        onClick={handleClick}
      >
        <MoreHorizTwoToneIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onFollow()} disableRipple>
          
          <StarRateTwoToneIcon/>
          {isFollowed == 0 ? "FOLLOW":"UNFOLLOW"}
        </MenuItem>
        <MenuItem onClick={() => onInterest()} disableRipple>
        <SentimentVerySatisfiedTwoToneIcon />
          {isInterested == 0 ? "Interesting":"Uninteresting"}
        </MenuItem>
      </StyledMenu>
      <NotificationContainer/>
    </div>
  );
}
