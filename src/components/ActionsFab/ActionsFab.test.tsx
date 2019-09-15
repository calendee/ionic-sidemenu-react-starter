import React from 'react';

import { renderWithUserAndEvents } from '../../../test/test-utils';
import ActionsFab from './ActionsFab';

describe('ActionsFab', () => {
  test('renders and matches snapshot', () => {
    const { container, getByText } = renderWithUserAndEvents(<ActionsFab />);
    getByText('0');
    expect(container).toMatchSnapshot();
  });
});
