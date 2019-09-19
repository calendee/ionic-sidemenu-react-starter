import React from 'react';
import { render } from '@testing-library/react';

import { IonApp } from '@ionic/react';
import { UserContextProvider } from '../src/providers/User/UserContextProvider';
import { EventsContextProvider } from '../src/providers/Events/EventsContextProvider';

// TODO: PR Opportunity:  Cypress caused this due importing chai
// Need to fix this so ignores aren't required
// @ts-ignore
expect.addSnapshotSerializer({
  // @ts-ignore
  test: val => typeof val === 'string',
  // @ts-ignore
  print: val => {
    const newVal = val.replace(/^[A-Z0-9]{10}$/g, 'ABC123');
    return `"${newVal}"`;
  },
});

function renderWithUserAndEvents(ui: JSX.Element, options = {}) {
  return render(
    <UserContextProvider {...options}>
      <EventsContextProvider>
        <IonApp>{ui}</IonApp>
      </EventsContextProvider>
    </UserContextProvider>,
    options,
  );
}

function renderWithUser(ui: JSX.Element, options = {}) {
  return render(
    <UserContextProvider {...options}>{ui}</UserContextProvider>,
    options,
  );
}

export { renderWithUser, renderWithUserAndEvents };
export * from '@testing-library/react';
