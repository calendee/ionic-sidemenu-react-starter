import React from 'react';
import { render } from '../../../test/test-utils';

import DetailsPage from './Details';

const defaultProps = {
  match: {
    params: {
      id: 20,
    },
  },
};

describe('Details Page', () => {
  test('renders and matches snapshot', () => {
    const { container, getByText } = render(<DetailsPage {...defaultProps} />);
    const {
      match: {
        params: { id },
      },
    } = defaultProps;
    const regEx = new RegExp(`you clicked on list item ${id}.`, 'i');
    getByText(regEx);
    expect(container).toMatchSnapshot();
  });
});
