import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapWithMarker= withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
      </GoogleMap>
   ));
   return(
        <GoogleMapWithMarker
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: 'inherit', width: 'inherit'}} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
   );
   }
};
export default Map;