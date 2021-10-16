import React from 'react'
import { Card, CardContent, Button, Avatar } from '@material-ui/core'
import UserCard from '../cards/UserCard'
import { useHistory } from 'react-router-dom'
import { fetchStatics } from '../../redux/actions/staticsActions'
import { useDispatch, useSelector } from 'react-redux'
import QuestionCard from '../cards/QuestionCard'
export default function SidebarRightComponent({removeAskQUestion}) {
    const fakeData =  [{
        fullname: "Sameh savon",
        avatar: "https://i.pravatar.cc/150?img=47",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Sameh savon",
        avatar: "https://i.pravatar.cc/150?img=11",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Sameh savon",
        avatar: "https://i.pravatar.cc/150?img=25",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Sameh savon",
        avatar: "https://i.pravatar.cc/150?img=3",
        domain: "Software Developer at HCL Technologies"
      },
       {
        fullname: "Sameh savon",
        avatar: "https://i.pravatar.cc/150?img=47",
        domain: "Software Developer at HCL Technologies"
      }]
    const history = useHistory();
    const dispatch = useDispatch()
    const { top_members, trend_questions } = useSelector(state => state.staticsReducers)
    React.useEffect(() => {
      dispatch(fetchStatics())
      return () => {
        dispatch({type: "CLEAN_STATICS"})
      }
    },[])
    return (<>
    {!removeAskQUestion?    <Button  
        fullWidth 
        style={{ marginTop: 30, minWidth: 100,  }} 
        variant="contained"
        color='primary'
        onClick={() => history.push('/add-question')}>
      Ask Question
    </Button>:null}

      <div style={{display:"grid", gridTemplateColumns: '1fr 1fr', marginTop: '20px'}}>
      <div>
            <Card>
                <CardContent style={{textAlign: 'center'}}>
                    <span>Questions</span><br/>
                    <bold><span style={{fontSize: '1.5rem'}}>309</span></bold>
                </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardContent style={{textAlign: 'center'}}>
                    <span>Solved</span><br/>
                    <bold><span style={{fontSize: '1.5rem'}}>309</span></bold>
                </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardContent style={{textAlign: 'center'}}>
                    <span>Answers</span><br/>
                    <bold><span style={{fontSize: '1.5rem'}}>309</span></bold>
                </CardContent>
            </Card>
        </div>
        <div>
             <Card>
                <CardContent style={{textAlign: 'center'}}>
                <span>Best Answers</span><br/>
                <bold><span style={{fontSize: '1.5rem'}}>309</span></bold>
                </CardContent>
            </Card>
        </div>
      </div>


      <div style={{ marginTop: '20px'}}>
            <Card>
                <CardContent>
                    <h4 >Top Membres</h4><br/>
                  { (top_members || []).map((item) =>  
                    <UserCard
                        small={true}
                        user_id={item.user_id}
                        fullname={item.fullname}
                        avatar={item.avatar}
                        questions={item.total_questions ? item.total_questions : 0}
                        answers={item.total_answers ? item.total_answers : 0}
                    />)}
                </CardContent>
            </Card>
      </div>

      <div style={{ marginTop: '20px'}}>
            <Card>
                <CardContent>
                    <h4>Trend questions</h4><br/>
                  { trend_questions.map((item) =>  
                     <div>
                      <QuestionCard 
                       avatar={item.avatar}
                       total_answers={item.total_answers}
                       question_id={item.question_id}
                       title={item.title}
                       answers
                      />
                     </div>)}
                </CardContent>
            </Card>
      </div>
        </>
    )
}
