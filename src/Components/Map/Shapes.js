import React from 'react';
import { Polygon, Circle } from 'react-google-maps';
import { connect } from 'react-redux';

const Shapes = props => {
  const { allShapeIds } = props;
  return (
    <>
      {allShapeIds.map((props, key) => {
        const { points, shapeType, center, radius } = props;
        if (shapeType === 'Polygon') {
          return <Polygon defaultEditable={true} key={key} path={points} />;
        }
        if (shapeType === 'Circle') {
          return (
            <Circle
              defaultEditable={true}
              key={key}
              center={center}
              radius={radius}
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
