import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';

import './Home.css';
import { EventsContext } from 'providers/Events/EventsContextProvider';
import { UserContext } from 'providers/User/UserContextProvider';
import { ActionTypes } from 'providers/Events/eventsActions';
import useInput from '../../hooks/useInput';

const HomePage: React.FunctionComponent = () => {
  const [title, setTitle] = useState('Home');
  const [formValid, setFormValid] = useState(false);
  const [logoutDisabled, setLogoutDisabled] = useState(true);
  const { dispatch: eventsDispatch } = useContext(EventsContext);
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');

  /**
   * Update the title of the page to include the logged in user's name
   */
  useEffect(() => {
    const newTitle =
      (user && user.firstName ? `${user.firstName}'s ` : '') + 'Home';
    setTitle(newTitle);
  }, [user, title, setTitle]);

  /**
   * Manage the login/logout buttons
   */
  useEffect(() => {
    if (firstName && !user.uid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }

    if (!user.uid) {
      setLogoutDisabled(true);
    } else {
      setLogoutDisabled(false);
    }
  }, [firstName, setFormValid, setLogoutDisabled, user]);

  /**
   * If there is not a logged in user, need to reset the form.
   * If the form starts to change again (user starts typing),
   * start setting the field to those values
   */
  useEffect(() => {
    const userObjectName = user && user.firstName ? user.firstName : '';
    const fieldName = firstName;
    setFirstName(null, userObjectName || fieldName);
  }, [firstName, user, setFirstName]);

  const login = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (firstName) {
      setUser({
        firstName,
        lastName,
        uid: Math.random()
          .toString(36)
          .substring(7),
      });
    }
  };

  const logout = () => {
    recordEvent('logout-button-clicked');
    setFirstName(null, '');
    setUser({ firstName: '', uid: null });
  };

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

        <IonCard>
          <IonCardHeader>Login</IonCardHeader>
          <IonCardContent>
            <form onSubmit={login}>
              <IonList>
                <IonItem>
                  <label htmlFor="firstName">First Name: </label>
                  <input
                    id="firstName"
                    disabled={!!user.uid}
                    name="firstName"
                    onChange={setFirstName}
                    placeholder="Enter your first name"
                    value={firstName}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel>Last Name</IonLabel>
                  <IonInput
                    id="lastName"
                    name="lastName"
                    onChange={setLastName}
                    placeholder="Enter your last name"
                    value={lastName}
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                color="primary"
                disabled={!formValid}
                style={{ marginLeft: '10px' }}
                type="submit"
                onClick={() => {
                  recordEvent('login-button-clicked');
                  login();
                }}
              >
                Login
              </IonButton>
              <IonButton
                disabled={logoutDisabled}
                color="primary"
                onClick={logout}
                style={{ marginLeft: '10px' }}
              >
                Logout
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>

        <IonButton
          color="primary"
          onClick={() => {
            recordEvent('button-one-clicked');
          }}
          style={{ marginLeft: '10px' }}
        >
          Click Me!
        </IonButton>
        <IonButton
          color="primary"
          onClick={() => {
            recordEvent('button-two-clicked');
          }}
          style={{ marginLeft: '10px' }}
        >
          Click Me Too!
        </IonButton>

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
