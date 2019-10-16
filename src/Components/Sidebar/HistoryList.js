import React from 'react';
import {
  Collapse,
  List,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const HistoryList = props => {
  const { open, shapes, dispatch } = props;
  const { allShapeIds } = shapes;
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {allShapeIds.map((props, key) => {
          const { shapeType, createdAt, updatedAt } = props;
          return (
            <Card>
              <CardContent>
                <Typography>{shapeType}</Typography>
                <Typography>{`Created at ${createdAt}`}</Typography>
                <Typography>{`Updated at ${updatedAt}`}</Typography>
              </CardContent>
              <CardActions>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon
                    onClick={() =>
                      dispatch({ type: 'REMOVE_SHAPE', key: { key } })
                    }
                  />
                </IconButton>
              </CardActions>
            </Card>
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
