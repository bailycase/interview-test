import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { DrawingManager } from 'react-google-maps/lib/components/drawing/DrawingManager';
import DrawingPalette from './DrawingPalette';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import Shapes from './Shapes';

const GoogleMapWithMarker = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
    defaultZoom={13}
  >
    {props.children}
  </GoogleMap>
));

const Map = props => {
  const { dispatch, drawingMode } = props;
  const google = window.google;
  const currentTime = new Date().toLocaleTimeString();
  return (
    <Box display="flex">
      <DrawingPalette />
      <GoogleMapWithMarker
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '100vh', width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >
        <DrawingManager
          drawingMode={drawingMode}
          defaultOptions={{
            drawingControl: false,
            drawingControlOptions: {
              drawingModes: [
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
          }}
          onPolygonComplete={e => {
            e.setMap(null);
            dispatch({
              type: 'ADD_POLYGON',
              shapeType: 'Polygon',
              points: e.latLngs.g[0].g,
              createdAt: currentTime,
            });
          }}
          onCircleComplete={e => {
            e.setMap(null);
            dispatch({
              type: 'ADD_CIRCLE',
              shapeType: 'Circle',
              center: { lat: e.center.lat(), lng: e.center.lng() },
              radius: e.radius,
              createdAt: currentTime,
            });
          }}
        />
        <Shapes />
      </GoogleMapWithMarker>
    </Box>
  );
};

const mapStateToProps = state => {
  const { drawingMode, shapes } = state;
  return {
    ...drawingMode,
    ...shapes,
  };
};

export default connect(mapStateToProps)(Map);
