import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter, ViewManager } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { UserContextProvider } from 'providers/User/UserContextProvider';
import { EventsContextProvider } from '../../providers/Events/EventsContextProvider';
import { getAppPages } from '../../utils/utils';
import Menu from '../../components/Menu/Menu';
import Home from '../Home/Home';
import List from '../List/List';
import Details from '../Details/Details';
import ActionsFab from '../../components/ActionsFab/ActionsFab';

/* Theme variables */
import '../../theme/variables.css';

const App: React.FunctionComponent = () => (
  <UserContextProvider>
    <EventsContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu appPages={getAppPages()} />
            <IonPage id="main">
              <ActionsFab></ActionsFab>
              <ViewManager>
                <IonRouterOutlet>
                  <Route path="/home" component={Home} exact={true} />
                  <Route path="/home/list" component={List} exact={true} />
                  <Route path="/home/list/details/:id" component={Details} />
                  <Redirect exact from="/" to="/home" />
                </IonRouterOutlet>
              </ViewManager>
            </IonPage>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </EventsContextProvider>
  </UserContextProvider>
);

export default App;
