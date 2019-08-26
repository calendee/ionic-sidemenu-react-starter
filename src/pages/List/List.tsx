import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  americanFootball,
  basketball,
  beer,
  bluetooth,
  boat,
  build,
  flask,
  football,
  paperPlane,
  wifi,
  addCircle,
  addCircleOutline,
  personAdd,
  arrowRoundDown,
  arrowDropdownCircle,
  logoAndroid,
  arrowRoundForward,
} from 'ionicons/icons';
import React from 'react';

const ListPage: any = (props: any) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ListItems />
      </IonContent>
    </>
  );
};

const ListItems = (props: any) => {
  const icons = [
    flask,
    wifi,
    beer,
    football,
    basketball,
    paperPlane,
    americanFootball,
    boat,
    bluetooth,
    build,
    addCircle,
    addCircleOutline,
    personAdd,
    arrowRoundDown,
    arrowDropdownCircle,
    logoAndroid,
    arrowRoundForward,
  ];

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
    x => {
      return (
        <IonItem href={`/home/list/details/${x}`} key={x}>
          <IonIcon icon={icons[x - 1]} slot="start" />
          Item {x}
          <div className="item-note" slot="end">
            This is item # {x}
          </div>
        </IonItem>
      );
    },
  );

  return <IonList>{items}</IonList>;
};

export default ListPage;
