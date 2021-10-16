import React from 'react'
import LayoutComponent from '../../components/layout/LayoutComponent'
import TabAnswers from '../profile/TabAnswers'
 
export default function MyAnswers() {
 
    return (
        <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
          <h4>3 Answers</h4> 
          <TabAnswers id={localStorage.getItem('user_id')}/>
        </LayoutComponent>
    )
}
