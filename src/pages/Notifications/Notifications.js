import React from 'react'
import LayoutComponent from '../../components/layout/LayoutComponent'
import Notification from '../../components/cards/Notification'
import { Button } from '@material-ui/core'

export default function Notifications() {
    
    const fakeData =  [{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=47",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=11",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=25",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=3",
        domain: "Software Developer at HCL Technologies"
      },
       {
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=47",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=11",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=25",
        domain: "Software Developer at HCL Technologies"
      },{
        fullname: "Dido German",
        avatar: "https://i.pravatar.cc/150?img=3",
        domain: "Software Developer at HCL Technologies"
      }]


    return (
        <LayoutComponent header={false} sidebar={true} sidebarRight={true}>
            <h3>
             ({fakeData.length})   Followers
            </h3>
            <hr />
            { fakeData.map((item) =>  
            <Notification 
                fullname={item.fullname}
                avatar={item.avatar}
                domain={item.domain}
          />
         )}
          <div style={{display: 'flex',   justifyContent: 'center', marginTop: '60px'}}>
            <Button
                style={{ height: 33, minWidth: 150, margin: '0 5px'}} 
                color="inherit" 
                variant="outlined" 
            >Show More</Button>
            </div>
        </LayoutComponent>
    )
}
