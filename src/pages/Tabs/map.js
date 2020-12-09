import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap,
} from "react-google-maps";


function Map() {
 return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      
    />
  );
}
class map extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
  }
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
     
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyDHCXK3ZxT-lrhqX0Ri0c8vgycp5uyP-Ow"
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    
  );
}