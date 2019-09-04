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
import { RouteComponentProps } from 'react-router';

interface RouterProps {
  id: string;
}

interface DetailsPageProps extends RouteComponentProps<RouterProps> {}

const DetailsPage: React.FC<DetailsPageProps> = ({
  match: {
    params: { id },
  },
}) => {
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
};

export default DetailsPage;
