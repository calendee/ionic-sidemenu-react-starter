import React from 'react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './Menu';
import appPages from '../../../__mocks__/data/appPages';
import { render } from '../../../test/test-utils';

describe('Menu', () => {
  test('renders and matches snapshot', () => {
    const { getByText } = render(
      <IonReactRouter>
        <Menu appPages={appPages} />
      </IonReactRouter>,
    );

    appPages.forEach(({ title }) => {
      const regex = new RegExp(`${title}`, 'i');
      getByText(regex);
    });
  });
});
