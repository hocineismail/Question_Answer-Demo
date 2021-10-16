import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

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

export default function SignupComponent() {
  const classes = useStyles();
  const [ form, setForm ] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const onSubmit = () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const data = {
      email: form.email,
      fullname: form.fullname,
      password: form.password
    }
    axios.post('http://localhost:4001/auth/signup', data, config)
         .then((response) => {
           console.log(response)
         }).catch((error) => {
          console.log(error)
         })
  }
  return (<>
    <form  noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        label="Fullname"
        value={form.fullname}
        onChange={(e) => setForm({...form, fullname: e.target.value})}
        className={classes.root}
        fullWidth 
        InputProps={{
          className: classes.input
        }} 
           
        />  
         
       <TextField 
         id="standard-basic" 
         label="Email"
         value={form.email}
         onChange={(e) => setForm({...form, email: e.target.value})}
         className={classes.root}
         fullWidth 
         InputProps={{
          className: classes.input
         }} 
           
        /> 
      <TextField 
       id="standard-basic"
       type="password" 
       label="Password" 
       value={form.password}
       onChange={(e) => setForm({...form, password: e.target.value})}
       className={classes.root}
       fullWidth
       InputProps={{
         className: classes.input
       }}   /> 
            <TextField 
       id="standard-basic"
       type="password" 
       label="Conrim Password"
       value={form.confirm_password} 
       onChange={(e) => setForm({...form, confirm_password: e.target.value})}
       className={classes.root}
       fullWidth
       InputProps={{
         className: classes.input
       }}   /> 
      <Button 
        fullWidth 
        style={{ marginTop: 35, minWidth: 100 }} 
        variant="contained" 
        disabled={form.confirm_password !== form.password && form.password.length > 6} 
        onClick={() => onSubmit()}>
        Sign up
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