import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';

const DrawingPalette = props => {
  const { dispatch } = props;
  return (
    <List>
      <ListItem button onClick={() => dispatch({ type: 'DRAW_EDIT' })}>
        Edit
      </ListItem>
      <ListItem button onClick={() => dispatch({ type: 'DRAW_POLYGON' })}>
        Polygon
      </ListItem>
      <ListItem button onClick={() => dispatch({ type: 'DRAW_CIRCLE' })}>
        Circle
      </ListItem>
    </List>
  );
};

export default connect()(DrawingPalette);
