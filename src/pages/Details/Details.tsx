import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

export default function Details(props: any) {
  const {
    match: {
      params: { id },
    },
  } = props;
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home/list" />
          </IonButtons>
          <IonTitle>{`Details ${id}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>The devil is in the details. You clicked on list item {id}.</p>
      </IonContent>
    </>
  );
}
