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

import { ActionTypes } from 'providers/Events/eventsActions';
import { EventsContext } from 'providers/Events/EventsContextProvider';
import { UserContext } from '../providers/User/UserContextProvider';
import useInput from '../hooks/useInput';
import Modal from '../components/Modal/Modal';

const UnAuthenticatedRoutes: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValid, setFormValid] = useState(false);
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
    if (firstName) {
      setIsOpen(false);
      setTimeout(() => {
        setUser({
          firstName,
          lastName,
          uid: Math.random()
            .toString(36)
            .substring(7),
        });
      });
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
    <IonPage>
      <IonContent>
        <Modal close={null} open={isOpen} title="Login">
          <IonContent>
            <form onSubmit={login}>
              <IonList>
                <IonItem>
                  <IonLabel>First Name</IonLabel>
                  <IonInput
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
                    onInput={setLastName}
                    placeholder="Enter your last name"
                    value={lastName}
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                color="primary"
                disabled={!formValid}
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
          </IonContent>
        </Modal>
      </IonContent>
    </IonPage>
  );
};

export default UnAuthenticatedRoutes;
