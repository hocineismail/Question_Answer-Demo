import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';



export default function Notification(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
 
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));

      const classes = useStyles();

    const {
        avatar,
        fullname,
        domain,
        link
    } = props
    return (
        <div className={"user-card"} style={{minHeight: '50px'}}>
            <Link to={link}>
               
                <Avatar 
                style={{
                    border: '2px solid gray',
                    float: 'left',
                    height:'40px',
                    width:'40px',
                    marginRight: '20px',
                    marginTop: '5px'
                }}  
                alt="Cindy Baker" src={avatar} 
                /> 
               

                <h4 className="user-card-fullname">{fullname}</h4 >
                <span>Posted a question on   &nbsp;
                    <Moment format="YYYY-MM-DD HH:mm" >
                        {new Date()}
                    </Moment>
                </span>
                 
            </Link>
        </div>
    )
}
