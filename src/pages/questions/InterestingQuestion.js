import React from 'react'
import LayoutComponent from '../../components/layout/LayoutComponent'
import SectionInterestQuestions from './SectionInterestQuestions'
 
export default function InterestingQuestion() {
    
    return (
        <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
          <h4>2 Interesting Question</h4> 
          <SectionInterestQuestions />
        </LayoutComponent>
    )
}
