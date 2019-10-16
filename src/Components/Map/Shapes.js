import React from 'react';
import { Polygon, Circle } from 'react-google-maps';
import { connect } from 'react-redux';

const Shapes = props => {
  const { allShapeIds, dispatch } = props;
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      {allShapeIds.map((props, key) => {
        const { points, shapeType, center, radius, id } = props;
        if (shapeType === 'Polygon') {
          return (
            <Polygon
              editable={true}
              draggable={true}
              key={key}
              path={points}
              onMouseDown={() => {
                dispatch({ type: 'EDIT_SHAPE', updatedAt: currentTime, id });
              }}
            />
          );
        }
        if (shapeType === 'Circle') {
          return (
            <Circle
              editable={true}
              draggable={true}
              key={key}
              center={center}
              radius={radius}
              onMouseDown={() => {
                dispatch({ type: 'EDIT_SHAPE', updatedAt: currentTime, id });
              }}
              onRadiusChanged={() => {
                dispatch({ type: 'EDIT_SHAPE', updatedAt: currentTime, id });
              }}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

const mapStateToProps = state => {
  const { shapes } = state;
  return {
    ...shapes,
  };
};
export default connect(mapStateToProps)(Shapes);
