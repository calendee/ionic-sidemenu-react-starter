import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

export default function DetailsPage(props: any) {
  const {
    match: {
      params: { id },
    },
  } = props;
  return (
    <IonPage data-testid="details-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home/list" />
          </IonButtons>
          <IonTitle>Details {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>The devil is in the details. You clicked on list item {id}.</p>
      </IonContent>
    </IonPage>
  );
}
