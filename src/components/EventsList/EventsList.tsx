import React, { useContext } from 'react';
import { IonList, IonItem, IonLabel, IonNote } from '@ionic/react';

import { EventsContext } from 'providers/Events/State';
import { Event } from '../../providers/Events/defaultState';

export const EventItem = ({ event }: { event: Event }) => (
  <IonItem>
    <IonLabel>{event.event}</IonLabel>
    <IonNote slot="end">
      {new Date(event.timestamp).toLocaleTimeString('en-US', {
        // @ts-ignore
        dateStyle: 'medium',
        // @ts-ignore
        timeStyle: 'short',
      })}
    </IonNote>
  </IonItem>
);

const EventsList = () => {
  const {
    state: { events },
  } = useContext(EventsContext);

  return (
    <IonList>
      {events.length ? (
        events.map(event => <EventItem event={event} key={event.id} />)
      ) : (
        <IonLabel className="ion-margin">No events recorded</IonLabel>
      )}
    </IonList>
  );
};

export default EventsList;
