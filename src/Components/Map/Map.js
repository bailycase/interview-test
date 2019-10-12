import React, { Component } from 'react';
import {withGoogleMap,  GoogleMap, Marker} from 'react-google-maps';
import {DrawingManager} from 'react-google-maps/lib/components/drawing/DrawingManager'
import DrawingPalette from './DrawingPalette'
import { Box } from '@material-ui/core';
import { connect } from 'react-redux'

const Map = (props) => {
    const {dispatch} = props;
      const google=window.google;
      const GoogleMapWithMarker= withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
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
        polygonOptions: {
            fillColor: `#FFFFFF`,
            editable: true,
        },
      }}
      onPolygonComplete={(e) => {dispatch({type: "ADD_SHAPE", id: 1, points: e.latLngs.g[0].g})}}
    />
      </GoogleMap>
   ));
   return(
       <Box display="flex" >
       <DrawingPalette/>
        <GoogleMapWithMarker
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: '100vh', width: '100%'}} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        </Box>
   );
   }



export default connect()(Map);



