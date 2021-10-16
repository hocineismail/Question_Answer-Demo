import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import {
    Link
} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': { 
      color: "white",
      borderColor: 'white', 
      "&.Mui-focused": {
        color: "white",
        borderColor: 'white',
    }
    },
    input: {
        color: "white", 
        borderWidth: "1px",
        borderColor: "yellow !important",
       
      },
 
  },
}));

export default function ForgotPasswordComponent() {
  const classes = useStyles();

  return (<>
    <form  noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        label="Email"
        className={classes.root}
        fullWidth 
        InputProps={{
          className: classes.input
        }} 
           
           /> 
   
      <Button 
        fullWidth 
        style={{ marginTop: 35, minWidth: 100 }} 
        variant="contained"  >
        Send Link
     </Button>
    </form>
    <div>
        <Link to={'/login'} style={{color: 'white' ,float: 'left'}}>Login </Link>
    </div>
    {/* <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
    <span style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;">
      Section Title <!--Padding is optional-->
    </span>
  </div> */}
  </>
  );
}