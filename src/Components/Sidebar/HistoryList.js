import React from 'react';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from '../Style';
import { connect } from 'react-redux';

const HistoryList = props => {
  const classes = useStyles();
  const { open, allShapeIds } = props;
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {allShapeIds.map((props, key) => {
          return (
            <ListItem button className={classes.nested}>
              <ListItemText primary={`A ${props.points.length} point shape`} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(HistoryList);
