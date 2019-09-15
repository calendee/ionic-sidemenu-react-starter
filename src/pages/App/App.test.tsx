/**
 * This test is primarily a quick integration test of the entire app instead of testing all components individually.
 * It may be replaed by a comprehensive e2e test with Cypress
 */

import React from 'react';

import App from './App';
import Login from '../Login/Login';
import { fireEvent, render, wait } from '../../../test/test-utils';
import appPages from '../../../__mocks__/data/appPages';
import { icons } from '../../../__mocks__/data/icons';

// Avoid hoisting causing: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
// https://jestjs.io/docs/en/es6-class-mocks.html#calling-jestmock-docs-en-jest-object-jestmockmodulename-factory-options-with-the-module-factory-parameter
const mockAppPages = appPages;
const mockIcons = icons;

// TODO: Replace this mock with actual import
// Unable to do because get `customElements not defined`
jest.mock('../../components/Modal/Modal', () => {
  const mockModal = ({ children }: { children: any }) => (
    <div id="fake-modal">{children}</div>
  );
  return mockModal;
});

jest.mock('utils/utils', () => ({
  getAppPages: () => mockAppPages,
  getIcons: () => mockIcons,
}));

describe('App', () => {
  test('renders and defaults to login page', () => {
    // @ts-ignore
    const { getByTestId } = render(<Login />);
    getByTestId('login-page');
  });

  test('renders with user, navigates, and tracks events', async () => {
    const user = { firstName: 'Jane', lastName: 'Doe', uid: 'XYZ123' };
    // TODO: PR Opportunity: Test this without forcing App to accept user props
    // @ts-ignore
    const { getByTestId, getByText } = render(<App user={user} />);
    await wait();
    const actionsFab = getByTestId('actions-fab');
    const clickMeButton = getByText(/click me!/i);
    const clickMeTooButton = getByText(/click me too!/i);
    getByText(/jane doe/i);

    /**
     * Test Event Recording
     */
    getByText('0', { selector: 'ion-fab-button > ion-badge' });
    fireEvent.click(clickMeButton);
    getByText('1', { selector: 'ion-fab-button > ion-badge' });
    fireEvent.click(clickMeTooButton);
    getByText('2', { selector: 'ion-fab-button > ion-badge' });

    /**
     * Test the FAB
     */

    fireEvent.click(actionsFab);
    await wait();

    /**
     * Test Opening Menu and Navigating to Links Page
     */
    const listLink = getByText(/menu link to list/i);
    fireEvent.click(listLink);
    getByTestId('list-page');

    /**
     * Test navigating to details page
     */
    const { id } = mockIcons[0];
    const regex = new RegExp(`^item ${id}$`, 'i');
    const itemLink = getByText(regex);
    fireEvent.click(itemLink);
    getByTestId('details-page');
  });
});
