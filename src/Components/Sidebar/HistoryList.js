import React from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from '../Style';
import { connect } from 'react-redux';

const HistoryList = props => {
  const classes = useStyles();
  const { open, shapes, dispatch } = props;
  const { allShapeIds } = shapes;
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {allShapeIds.map((props, key) => {
          return (
            <ListItem button className={classes.nested}>
              <ListItemText primary={`A shape`} secondary={key} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon
                    onClick={() =>
                      dispatch({ type: 'REMOVE_SHAPE', key: { key } })
                    }
                  />
                </IconButton>
              </ListItemSecondaryAction>
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
