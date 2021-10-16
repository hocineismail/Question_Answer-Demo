import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import {
    Link,
    useHistory,
    Redirect
} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/actions/signActions';

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

export default function LoginComponent() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { is_loged_in } = useSelector(state => state.signsReducers)
  const [ form, setForm ] = React.useState({
    password: '',
    email: '',
  })
  // React.useEffect(() => {
    
  //   if (localStorage.getItem('auth-token') || is_loged_in) {
  //     history.push('/')
  //   }
  // },[is_loged_in])
  
  const onSubmit = () => {
     dispatch(signin(form))
  }
  if (!localStorage.getItem('auth-token')) {
  return (<>
    <form  noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        label="Email"
        className={classes.root}
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
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
      
      <Button 
        fullWidth 
        style={{ marginTop: 35, minWidth: 100 }} 
        variant="contained"
        onClick={onSubmit}>
        Log In
     </Button>
    </form>
    <div>
        <Link to={'/signup'} style={{color: 'white' ,float: 'left'}}>Create account </Link>
        <Link to={'/forgot-password'} style={{color: 'white', float: 'right'}}>forgot password </Link>
    </div>
    {/* <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
    <span style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;">
      Section Title <!--Padding is optional-->
    </span>
  </div> */}
  </>
  );
 } else {
    return <Redirect to={'/'} />
 } 
}