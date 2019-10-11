import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import useStyles from '../Style'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import HistoryIcon from '@material-ui/icons/History';

export default () => {
  const classes = useStyles();
  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      <Divider />
      <List>
        {['Draw', 'History'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <BrushIcon /> : <HistoryIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Drawer>
  )
}


