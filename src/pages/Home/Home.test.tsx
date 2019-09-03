import React from 'react';
import { render } from '../../../test/test-utils';

import HomePage from './Home';

describe('Home Page', () => {
  test('renders', () => {
    const { container, getByText } = render(<HomePage />);
    getByText(/welcome to ionic/i);
    expect(container).toMatchSnapshot();
  });
});
