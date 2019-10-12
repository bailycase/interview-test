import React from 'react';
import './App.css';
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Components/Sidebar';
import useStyles from './Components/Style';
import Map from './Components/Map/';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <Typography className={''} variant="h6" noWrap>
              Map Creator
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Map />
        </main>
      </div>
    </Provider>
  );
}

export default App;
