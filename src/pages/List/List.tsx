import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { getIcons } from '../../utils/utils';
import { IIcon } from '../../declarations';

const ListPage: React.FunctionComponent = () => {
  const icons = getIcons();

  return (
    <IonPage data-testid="list-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ListItems icons={icons} />
      </IonContent>
    </IonPage>
  );
};

export const ListItems = ({ icons }: { icons: IIcon[] }) => {
  const items = icons.map(({ icon, name, id }, index) => {
    return (
      <IonItem href={`/home/list/details/${id}`} key={id}>
        <IonIcon icon={icon} slot="start" />
        {`Item ${id}`}
        <div className="item-note" slot="end">
          {`This is item # ${id}`}
        </div>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
