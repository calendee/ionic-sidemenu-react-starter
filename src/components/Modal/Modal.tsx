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

interface ModalProps {
  title: string;
  close: () => void;
  open: boolean;
  children: JSX.Element;
}

const Modal = ({ title, close, open, children }: ModalProps) => (
  <IonModal
    isOpen={open}
    backdropDismiss={!!close}
    onDidDismiss={() => {
      if (close) {
        close();
      }
    }}
  >
    <IonHeader>
      <IonToolbar>
        {close ? (
          <IonButtons slot="secondary">
            <IonButton onClick={close}>
              <IonIcon slot="icon-only" name="close" />
            </IonButton>
          </IonButtons>
        ) : null}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>{children}</IonContent>
  </IonModal>
);

export default Modal;
