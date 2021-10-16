import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
 import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ModalComponent from '../modal/ModalComponent';
import { useHistory } from "react-router-dom" 
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))


export default function NavbarComponent() {
    const history = useHistory() 
    const classes = useStyles();
 
    const [anchorEl, setAnchorEl] = React.useState(null);

     
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
          
        {/* <AppBar position="static"  style={{ background: 'transparent' }}> */}
          <Toolbar>
            <img 
              src={`https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg`} 
              alt='logo'
              width={50} 
              style={{borderRadius: 100, margin: '0 19px'}} 
            />
            <Typography variant="h6" className={classes.title}>
              Q & A
            </Typography>
           
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
              {localStorage.getItem('auth-token') ?
                <React.Fragment> 
                   <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleTwoToneIcon  /> 
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              > <div>
                {localStorage.getItem('fullname')}
              </div>
                <MenuItem onClick={() => history.push(`/user?id=${localStorage.getItem('user_id')}`)}>profile</MenuItem>
                <MenuItem onClick={() => localStorage.clear()}>Log out</MenuItem>
              </Menu>
            </div>
                  {/* <NotificationsTwoToneIcon  style={{fontSize: '30',margin: '0 5px', cursor: 'pointer'}}/> */}
                
                 
                </React.Fragment>
                 : 
              <React.Fragment>
               <Button 
                style={{ height: 33, minWidth: 100, margin: '0 5px'}} 
                color="inherit" 
                variant="outlined" 
                onClick={() => history.push("/login")} >
                  Login
                </Button>
                <Button 
                style={{ height: 33, minWidth: 100, margin: '0 5px'}} 
                color="primary" 
                variant="contained" 
                onClick={() => history.push("/signup")}
                >Sign Up</Button>
               </React.Fragment>}
          </Toolbar>
        {/* </AppBar> */}
      </div>
    )
}
