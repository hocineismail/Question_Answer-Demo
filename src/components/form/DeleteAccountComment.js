import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Avatar } from '@material-ui/core';
 
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

export default function DeleteAccountComment() {
    const classes = useStyles();
    return (
      <div style={{ 
          padding: 20,
         }}> 
          
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
  
 
          <TextField 
            id="standard-basic"
            type="password" 
            label="Current password" 
            fullWidth
          /> 

          <Button 
            fullWidth 
            style={{ marginTop: 35, minWidth: 100 }} 
            variant="contained" 
            color="secondary">
           Delete Account
        </Button>
        </form>
      </div>
    )
}
