import React from 'react';

import { fireEvent, renderWithUserAndEvents } from '../../../test/test-utils';
import ActionsFab from './ActionsFab';

describe('ActionsFab', () => {
  test('renders and matches snapshot', async () => {
    const { container, getByText } = renderWithUserAndEvents(<ActionsFab />);
    getByText('0');
    fireEvent.click(container);
    expect(container).toMatchSnapshot();
  });
});
