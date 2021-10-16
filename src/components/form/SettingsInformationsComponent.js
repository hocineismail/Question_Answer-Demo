import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Avatar, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_my_informations, update_informations } from '../../redux/actions/userActions';
 
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

export default function SettingsInformationsComponent() {
    const classes = useStyles();
    const dispatch = useDispatch();
 
    const { account, updated, loading } = useSelector(state => state.userReducers);
    const { error } = useSelector(state => state.userReducers.account);
    const [ infromation ,setInfromation ] = React.useState({
      fullname: '', 
      email: '',
      domain: '',
      password: '',
    })
    React.useEffect(() => {
      setInfromation({
        ...infromation,
        fullname: account.fullname, 
        email: account.email,
        domain: account.domain, 
      })
    },[account]);

    React.useEffect(() => {
      if (error.status) { 
        alert(error.errors)
      }
    },[error]);

    React.useEffect(() => {
      dispatch(fetch_my_informations())
    },[]);
    const onSubmit = () => {
      console.log(infromation)
      dispatch(update_informations(infromation))
    }
    
    return (
      <div style={{ 
          padding: 20,
          position: 'ralative'
         }}> 
          {/* <div id="loading"> */}
          {/* <div class="box" >
            <div> <CircularProgress color="secondary" /></div>
          </div> */}
          {/* </div> */} 
        <form 
           noValidate 
           autoComplete="off"
           style={{
            maxWidth:'350px',  
            width: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
            }}> 
          <Avatar 
            style={{
              border: '5px solid white',
              height: 100, 
              width: 100,  
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto', 
            }} 
            alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" 
           /> 
          <TextField 
            id="standard-basic" 
            label="Fullname"
            value={infromation.fullname}
            onChange={(e) => setInfromation({...infromation, fullname: e.target.value})}
            fullWidth 
            /> 
          <TextField 
            id="standard-basic" 
            label="Email"
            value={infromation.email}
            onChange={(e) => setInfromation({...infromation, email: e.target.value})}
            fullWidth 
            /> 
          <TextField 
            id="standard-basic" 
            label="Your Domain"
            value={infromation.domain}
            onChange={(e) => setInfromation({...infromation, domain: e.target.value})}
            fullWidth 
          />  
          <TextField 
            id="standard-basic"
            type="password" 
            label="Current password" 
            value={infromation.password}
            onChange={(e) => setInfromation({...infromation, password: e.target.value})}
            fullWidth
          /> 
 
          <Button 
            fullWidth 
            style={{ marginTop: 35, minWidth: 100 }} 
            variant="contained" 
            color="primary"
            onClick={onSubmit}
            loading={loading}
            disabled={infromation.password.length < 6}
            >
             {loading ? <CircularProgress style={{left: -10}}  size={20}/> : null}
           Save
         </Button>
        </form>
      </div>
    )
}
