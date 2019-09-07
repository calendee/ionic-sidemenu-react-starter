import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonModal,
  IonIcon,
  IonTitle,
  IonButton,
} from '@ionic/react';

const Modal = ({ title, close, open, children }) => (
  <IonModal isOpen={open}>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton onClick={close}>
            <IonIcon slot="icon-only" name="close" />
          </IonButton>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>{children}</IonContent>
  </IonModal>
);

export default Modal;
