import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  carOutline,
  personCircleOutline,
  helpSharp,
} from "ionicons/icons";
import News from "./pages/Tabs/News";
import Profile from "./pages/Tabs/Profile";
import helps from "./pages/Tabs/helps";
import EditProfile from "./pages/Auth/EditProfile";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import useAuth from "./hooks/useAuth";
import UserContext from "./contexts/UserContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { from } from "rxjs";


const App = () => {
  const [user, setUser] = useAuth();

  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                path="/"
                render={() => <Redirect to="/news" />}
                exact={true}
              />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile} />
              <Route path="/helps" component={helps} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route component={() => <Redirect to="/news" />} />
            </IonRouterOutlet>

         
            <IonTabBar slot="bottom">
            
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
                <IonTabButton tab="news" href="/news">
            <IonIcon icon={carOutline} />
                <IonLabel>Ambi</IonLabel>
              </IonTabButton>
              <IonTabButton tab="helps" href="/helps">
                <IonIcon icon={helpSharp} />
                <IonLabel>Help and support</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
