import React, { useContext, useState, useEffect } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';

import { ActionTypes } from 'providers/Events/eventsActions';
import { EventsContext } from 'providers/Events/EventsContextProvider';
import { UserContext } from 'providers/User/UserContextProvider';
// @ts-ignore
import Modal from '../../components/Modal/Modal.tsx';
import useInput from '../../hooks/useInput';

interface LoginPageProps extends RouteComponentProps {}

const LoginPage: React.FC<LoginPageProps> = ({ history, location }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { dispatch: eventsDispatch } = useContext(EventsContext);
  const { setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');

  /**
   * Validate the form
   */
  useEffect(() => {
    if (firstName && lastName) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [firstName, lastName, setFormValid]);

  const login = (e?: React.FormEvent | null) => {
    if (e) {
      e.preventDefault();
    }
    if (firstName && lastName) {
      setIsOpen(false);
      setTimeout(() => {
        setUser({
          firstName,
          lastName,
          uid: Math.random()
            .toString(36)
            .substring(7),
        });

        // Redirect authenticated user to home page
        if (location.pathname === '/login') {
          history.replace('/home');
        }
      });
    } else {
      setFormSubmitted(true);
      setFormValid(false);
    }
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
    <IonPage data-testid="login-page">
      <IonContent>
        <Modal close={null} open={isOpen} title="Login">
          <IonContent>
            <form onSubmit={login}>
              <IonList>
                <IonItem>
                  <IonLabel>First Name</IonLabel>
                  <IonInput
                    data-testid="firstNameField"
                    id="firstName"
                    name="firstName"
                    onIonChange={setFirstName}
                    placeholder="Enter your first name"
                    value={firstName}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Last Name</IonLabel>
                  <IonInput
                    id="lastName"
                    name="lastName"
                    onIonChange={setLastName}
                    placeholder="Enter your last name"
                    value={lastName}
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                color="primary"
                // disabled={!formValid}
                expand="block"
                style={{ marginLeft: '10px' }}
                type="submit"
                onClick={() => {
                  recordEvent('login-button-clicked');
                  login();
                }}
              >
                Login
              </IonButton>
            </form>
            {formSubmitted && !formValid ? (
              <p>Please enter your first and last name</p>
            ) : null}
          </IonContent>
        </Modal>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
