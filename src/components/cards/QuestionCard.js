import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge } from '@material-ui/core'
import './Card.css'
import { Link } from 'react-router-dom';

export default function QuestionCard(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
 
       
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
      }));

      const classes = useStyles();

    const {
        avatar,
        title,
        domain,
        question_id,
        questions,
        answers,
        total_answers
    } = props
    console.log(props)
    return (
        <Link to={`/question?id=${question_id}`} style={{ textDecoration:'none'}}>
        <div className={"question-card"} style={{minHeight: '30px', display: 'grid', gridTemplateColumns: '40px auto'}}> 
            <div >
                <div style={{
                    backgroundColor: 'green', 
                    padding: '4px', 
                    borderRadius: '5px',
                    fontSize: '12px',
                    color: 'white',
                    textAlign:'center',
                    width: '30px'}}>
                {total_answers}
                </div>
            
            </div >
            <div >
            {title}
            </div >
          
          
        </div>
        </Link>
    )
}
