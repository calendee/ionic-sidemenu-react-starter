import React from 'react';
import { renderWithUser, wait } from '../../../test/test-utils';

import HomePage from './Home';

describe('Home Page', () => {
  test('renders home page with a user', async () => {
    const user = { firstName: 'Jane', lastName: 'Doe', uid: 'XYZ123' };
    const { container, getByText } = renderWithUser(<HomePage />, { user });
    await wait();
    getByText(/jane doe/i);
    expect(container).toMatchSnapshot();
  });
});
