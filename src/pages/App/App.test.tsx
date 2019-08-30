import React from 'react';

import App from './App';
import { fireEvent, render } from '../../../test/test-utils';
import appPages from '../../../__mocks__/data/appPages';
import { icons } from '../../../__mocks__/data/icons';

// Avoid hoisting causing: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
// https://jestjs.io/docs/en/es6-class-mocks.html#calling-jestmock-docs-en-jest-object-jestmockmodulename-factory-options-with-the-module-factory-parameter
const mockAppPages = appPages;
const mockIcons = icons;

jest.mock('utils', () => ({
  getAppPages: () => mockAppPages,
  getIcons: () => mockIcons,
}));

describe('App', () => {
  test('renders and defaults to home page and matches snapshot', () => {
    const { container, getByTestId } = render(<App />);
    getByTestId('home-page');
    expect(container).toMatchSnapshot();
  });

  test('can navigate to list page and matches snapshot', () => {
    const { container, getByTestId, getByText } = render(<App />);
    const listLink = getByText(/menu link to list/i);
    fireEvent.click(listLink);
    getByTestId('list-page');

    // Test is only needed to force jest to wait for the new page to render
    // so that the snapshot is of the new page and not the original
    const regExp = new RegExp(`^this is item # 1$`, 'i');
    getByText(regExp);
    expect(container).toMatchSnapshot();
  });
});
