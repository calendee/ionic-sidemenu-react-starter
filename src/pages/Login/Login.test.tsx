import React from 'react';
import { renderWithUser, wait } from '../../../test/test-utils';

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
    const { container, getByText } = renderWithUser(<Login />);
    await wait();
    getByText(/login/i);
    expect(container).toMatchSnapshot();
  });
});
