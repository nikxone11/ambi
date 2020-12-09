import React  from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";
import { withGoogleMap, withScriptjs, GoogleMap, mapStyles
} from "react-google-maps";

function Map() {
return (
   <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 19.079023, lng: 72.908012 }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>)
}
 const WrappedMap = withScriptjs(withGoogleMap(Map));
const News = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Ambulance" />
      <IonContent fullscreen>
        <LargeHeader title="Ambulance" />  
      </IonContent>
    </IonPage>
    
  );

};

export default function App() {
  return (
     
    <div style={{ width: "100vw", height: "100vh" }}>
          <SmallHeader title="Ambulance" />
    <LargeHeader title="Ambulance" />  
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyDHCXK3ZxT-lrhqX0Ri0c8vgycp5uyP-Ow"
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    
  );
}
  