import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { UserContext } from 'providers/User/UserContextProvider';
import { EventsContext } from 'providers/Events/EventsContextProvider';
import { ActionTypes } from 'providers/Events/eventsActions';
import { AppPage } from '../../declarations';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => {
  const { setUser } = useContext(UserContext);
  const { dispatch: eventsDispatch } = useContext(EventsContext);

  const logout = () => {
    setUser({ firstName: '', lastName: '', uid: null });
    eventsDispatch({
      type: ActionTypes.RESET_EVENTS,
      payload: null,
    });
  };

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem href={appPage.url}>
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItem onClick={logout}>
            <IonIcon slot="start" icon="close" />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
