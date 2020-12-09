import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";

const helps = () => {
  return (
    <IonPage>
      <SmallHeader title="Ambulance" />
      <IonContent fullscreen>
        <LargeHeader title="Ambulance" />
      </IonContent>
  
      {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key:"AIzaSyCG23Fbx0XQSeS2v1LAOgRPxbVyGWdY3jA" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        
        </GoogleMapReact>
      </div> */}
        </IonPage>
  );
};


export default helps;