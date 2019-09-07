import React, { useContext } from 'react';
import {
  IonBadge,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/react';

import Modal from '../Modal/Modal';
import useToggle from '../../hooks/useToggle';

import { EventsContext } from 'providers/Events/State';
import { ActionTypes } from 'providers/Events/actions';
import EventsList from '../EventsList/EventsList';

const ActionsFab: React.FC = () => {
  const { state, dispatch } = useContext(EventsContext);
  const [open, setOpen] = useToggle(false);

  const resetCounter = () => {
    dispatch({
      type: ActionTypes.RESET_EVENTS,
      payload: null,
    });
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonBadge color="primary">{state.count}</IonBadge>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton color="danger" onClick={setOpen}>
            <IonIcon icon="list" />
          </IonFabButton>
          <IonFabButton color="danger" onClick={resetCounter}>
            <IonIcon icon="close" />
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <Modal close={setOpen} open={open} title="Events List">
        <EventsList />
      </Modal>
    </>
  );
};

export default ActionsFab;
