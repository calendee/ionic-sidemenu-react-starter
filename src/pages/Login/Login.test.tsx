import React from 'react';
import {
  fireEvent,
  renderWithUserAndEvents,
  wait,
} from '../../../test/test-utils';

import Login from './Login';

// TODO: Replace this mock with actual import
// Unable to do because get `customElements not defined`
jest.mock('../../components/Modal/Modal', () => {
  const mockModal = ({ children }: { children: any }) => (
    <div id="fake-modal">{children}</div>
  );
  return mockModal;
});

describe('Routes', () => {
  test('renders login modal with no user', async () => {
    // @ts-ignore
    const { container } = renderWithUserAndEvents(<Login />);
    await wait();
    expect(container).toMatchSnapshot();
  });

  test('renders login error', async () => {
    // @ts-ignore
    const { container, getByText } = renderWithUserAndEvents(<Login />);
    const loginButton = getByText(/login/i, {
      selector: 'ion-button',
    });

    // Test failing to login
    fireEvent.click(loginButton);
    await wait();
    expect(container).toMatchSnapshot();
  });
});
