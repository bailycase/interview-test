import React from 'react';
import './App.css';
import {AppBar, Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Sidebar from './Components/Sidebar'
import useStyles from './Components/Style'

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
      <Toolbar>
        <Typography className={''} variant="h6" noWrap>
          Map Creator
        </Typography>
        
      </Toolbar>
      </AppBar>

    <Sidebar/>
    </div>
  );
}

export default App;
