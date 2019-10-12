import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from '../Style';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default () => {
  const classes = useStyles();
  const open = false;
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
        <ListItem button>
          <ListItemIcon>
            <BrushIcon />{' '}
          </ListItemIcon>
          <ListItemText primary={'Draw'} />
        </ListItem>
        <ListItem button onClick={() => console.log('c')}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
    </Drawer>
  );
};
