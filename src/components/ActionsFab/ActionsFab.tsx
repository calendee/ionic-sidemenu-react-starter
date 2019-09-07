import React, { useContext } from 'react';
import {
  IonBadge,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/react';

import { EventsContext } from 'providers/Events/State';
import { ActionTypes } from 'providers/Events/actions';

const ActionsFab: React.FC = () => {
  const { state, dispatch } = useContext(EventsContext);

  const resetCounter = () => {
    dispatch({
      type: ActionTypes.RESET_EVENTS,
      payload: null,
    });
  };

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonBadge color="primary">{state.count}</IonBadge>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton color="danger">
          <IonIcon icon="list" />
        </IonFabButton>
        <IonFabButton color="danger" onClick={resetCounter}>
          <IonIcon icon="close" />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default ActionsFab;
