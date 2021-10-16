import React from 'react'
import { Container, Paper, Grid } from '@material-ui/core'
import HeaderComponent from '../header/HeaderComponent';

import { makeStyles } from '@material-ui/core/styles';
import SidebarComponent from '../sidebar/SidebarComponent';
import NavbarComponent from '../navbar/NavbarComponent';
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function LayoutComponent(props) {
    const {
        children,
        header,
        sidebar,
        sidebarRight,
        component
    } = props;
    const classes = useStyles();
    return (
        <div> 
            {header ? <HeaderComponent /> :  
            <Container>
              <NavbarComponent />
            </Container>}
            {component}
            <div> 
            <Container> 
                <Grid container spacing={3}>
                  {sidebar ?
                    <Grid item  xs={12}  md={3}>
                      <SidebarComponent />
                    </Grid> :null}

                    <Grid item  xs={12} md={sidebar && sidebarRight ? 6 : sidebar && !sidebarRight ? 9 : 12 }  style={{margin: '20px 0'}}> 
                       {children} 
                    </Grid>
                    {sidebarRight?
                     <Grid item xs={12}   md={3}> 
                    {sidebarRight}
                       
                    </Grid>
                    :null}

                </Grid>   
             </Container>  
             </div>
        </div>
    )
}
