
import React, {useState} from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";
import { withGoogleMap, withScriptjs, GoogleMap, mapStyles, Marker,  InfoWindow, google
} from "react-google-maps";




function Map() {
  const [selectedMark, setSelectedMark] = useState(null);
return (
  
   <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 19.079023, lng: 72.908012 }}
      defaultOptions={{ styles: mapStyles }}
    >
    <Marker  position={{
      lat:19.098579,
      lng:72.904931
       }}
         onClick={() => {
           setSelectedMark()
           ;
         
         
         }}
       />
       {selectedMark && (
         <InfoWindow
          position={{
             lat:19.098579,
             lng:72.904931
       }}>
            <div>Mark details</div>
         </InfoWindow>
       )}
       <Marker  position={{
      lat:19.079023,
      lng:72.908012
       }} icon={{
         url: '/ambulance.svg',
          size: {width: 60, height: 100}, anchor: {x: 15, y: 50}, scaledSize: {width: 50, height: 80}
       }} >
       </Marker>
    </GoogleMap>
    

    )
    
    
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
      ></WrappedMap>
    </div>
    
  );
}







  
  
