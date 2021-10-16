import React from 'react'
import NavbarComponent from '../navbar/NavbarComponent'
import { Container, Button } from '@material-ui/core';

import "./HeaderComponent.css"
export default function HeaderComponent() {
    return (
        <div>
          <div className="b ody"> 
            <div className="header-cover">
              
               <Container>
               <NavbarComponent />
                    <div   className="introtext">  
                        <h1 className="header-title header-title-laptop">Partagez et développez les connaissances du monde !</h1> 
                        <h1 className="header-title header-title-mobile">Create Account for free</h1> 
                        <p className="header-sub-title header-title-laptop">
                        Nous voulons connecter les personnes qui ont des connaissances à celles qui en ont besoin, réunir des personnes ayant des perspectives différentes afin qu'elles puissent mieux se comprendre et permettre à chacun de partager ses connaissances.
                        </p>
                        <p className="header-sub-title header-title-mobile">
                        that's take 1 min
                        </p>
                        <Button style={{borderRadius:  50, height: 33, minWidth: 100, marginTop: '5vh'}} color="primary" variant="contained" >Post Your Question</Button>
                    </div>
        
            </Container> 
            </div>              
          </div> 
        </div>
    )
}
