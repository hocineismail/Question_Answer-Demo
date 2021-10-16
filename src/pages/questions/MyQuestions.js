import React from 'react'
import LayoutComponent from '../../components/layout/LayoutComponent'
import TabQuestions from '../profile/TabQuestions'
 
export default function MyQuestions() {
    
    return (
        <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
          <h4>2 Questions</h4> 
          <TabQuestions id={localStorage.getItem('user_id')}/>
        </LayoutComponent>
    )
}
