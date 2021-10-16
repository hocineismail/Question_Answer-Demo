import React from 'react'
import SettingsInformationsComponent  from '../../components/form/SettingsInformationsComponent'
import LayoutComponent from '../../components/layout/LayoutComponent' 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SettingsPasswordComponent from '../../components/form/SettingsPasswordComponent';
import DeleteAccountComment from '../../components/form/DeleteAccountComment';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
       
    },
  }));
  

export default function Settings() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
        <LayoutComponent
          sidebar={true} 
          sidebarRight={true}>
 <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Informations" {...a11yProps(0)} />
          <Tab label="Password" {...a11yProps(1)} />
          <Tab label="Delete my account" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
   
        <TabPanel value={value} index={0} dir={theme.direction}>
            <SettingsInformationsComponent  />   
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SettingsPasswordComponent />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DeleteAccountComment />
        </TabPanel>
      
    </div>
           
        </LayoutComponent>
    )
}
