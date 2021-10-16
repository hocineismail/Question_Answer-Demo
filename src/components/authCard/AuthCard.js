import React from 'react'; 
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

 

export default function AuthCard() {
    return (
        <Alert variant="outlined" severity="info">
           You need to <Link to={'/login'}>Login</Link> or <Link to={'/signup'}> Sign up </Link> for sharing your answer 
        </Alert>
    )
}
