import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import './Card.css'
import { Link } from 'react-router-dom';

export default function UserCard(props) {
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
        small: {
            width: theme.spacing(5),
            height: theme.spacing(5),
          },
      }));

      const classes = useStyles();

    const {
        avatar,
        fullname,
        domain,
        user_id,
        questions,
        answers,
        small
    } = props
    console.log(props)
    return (
        <Link to={`/user?id=${user_id}`} style={{ textDecoration:'none'}}>
        <div className={"user-card"} style={{minHeight: small ? '60px':'80px'}}>
            
                <Avatar 
                    style={{border: '2px solid gray', 
                    float: 'left',
                     marginRight: small? '10px':'20px'}}  
                    alt="Cindy Baker" src={avatar} 
                    className={small ? classes.small: classes.large}/> 
                    <h4 
                    className={`${small ? "small-user-card-fullname":"user-card-fullname"}`} 
                    // style={{fontSize: props.small ? '14px': '18px'}}
                    >
                        {fullname}</h4>
                    {domain ? <span>{domain}</span> : null }
                   {questions !== null?
                <span style={{fontSize: '14px'}}>{questions} Q | {answers} A</span> : null } 
            
        </div>
        </Link>
    )
}
