import React from 'react';
import { render } from '../../../test/test-utils';

import HomePage from './Home';

describe('Home Page', () => {
  test('renders', () => {
    const { getByText } = render(<HomePage />);
    getByText(/welcome to ionic/i);
  });
});
