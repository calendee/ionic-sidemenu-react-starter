import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { ViewManager } from '@ionic/react-router';

import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Details from '../pages/Details/Details';
import Menu from 'components/Menu/Menu';
import { getAppPages } from 'utils/utils';
import ActionsFab from 'components/ActionsFab/ActionsFab';

const AuthenticatedRoutes: React.FunctionComponent = () => {
  return (
    <IonSplitPane contentId="main">
      <Menu appPages={getAppPages()} />
      <IonPage id="main">
        <ActionsFab></ActionsFab>
        <ViewManager>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/home/list" component={List} exact={true} />
            <Route path="/home/list/details/:id" component={Details} />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
        </ViewManager>
      </IonPage>
    </IonSplitPane>
  );
};

export default AuthenticatedRoutes;
