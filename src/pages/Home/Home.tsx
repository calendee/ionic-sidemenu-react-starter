import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';

import { EventsContext } from 'providers/Events/EventsContextProvider';
import { UserContext } from 'providers/User/UserContextProvider';
import { ActionTypes } from 'providers/Events/eventsActions';
import './Home.css';

const HomePage: React.FunctionComponent = () => {
  const [title, setTitle] = useState('Home');
  const { dispatch: eventsDispatch } = useContext(EventsContext);
  const { user } = useContext(UserContext);

  // Update title with user name
  useEffect(() => {
    const { firstName, lastName } = user;
    setTitle(`Home: ${firstName} ${lastName}`);
  }, [user, title, setTitle]);

  const recordEvent = (event: string) => {
    eventsDispatch({
      type: ActionTypes.RECORD_EVENT,
      payload: {
        event,
      },
    });
  };

  return (
    <IonPage data-testid="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building
              out features and components. Check out some of the resources below
              for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonGrid>
          <IonRow align-items-center>
            <IonCol>
              <IonButton
                color="primary"
                expand="block"
                onClick={() => {
                  recordEvent('button-one-clicked');
                }}
              >
                Click Me!
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color="primary"
                expand="block"
                onClick={() => {
                  recordEvent('button-two-clicked');
                }}
              >
                Click Me Too!
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/building/scaffolding"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/layout/structure"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/theming/basics"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
