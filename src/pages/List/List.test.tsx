import React from 'react';

import ListPage, { ListItems } from './List';
import { render } from '../../../test/test-utils';
import { icons } from '../../../__mocks__/data/icons';

describe('List Page', () => {
  test('renders', () => {
    const { getByText } = render(<ListPage />);
    getByText(/list/i);
  });

  test('renders list items', () => {
    const { getByText } = render(<ListItems icons={icons} />);
    icons.forEach(({ icon, name, id }) => {
      const regExp = new RegExp(`^this is item # ${id}$`, 'i');
      getByText(regExp);
    });
  });
});
