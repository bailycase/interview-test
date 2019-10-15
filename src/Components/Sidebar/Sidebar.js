import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from '../Style';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HistoryList from './HistoryList';

export default () => {
  const [open, toggleOpen] = useState(false);
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
        <ListItem button onClick={() => toggleOpen(!open)}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <HistoryList open={open} />
      </List>
    </Drawer>
  );
};
