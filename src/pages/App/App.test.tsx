import React from 'react';

import App from './App';
import { fireEvent, render } from '../../../test/test-utils';
import appPages from '../../../__mocks__/data/appPages';
import { icons } from '../../../__mocks__/data/icons';

// Avoid hoisting causing: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
// https://jestjs.io/docs/en/es6-class-mocks.html#calling-jestmock-docs-en-jest-object-jestmockmodulename-factory-options-with-the-module-factory-parameter
const mockAppPages = appPages;
const mockIcons = icons;

jest.mock('utils/utils', () => ({
  getAppPages: () => mockAppPages,
  getIcons: () => mockIcons,
}));

describe('App', () => {
  test('renders and defaults to home page', () => {
    const { getByTestId } = render(<App />);
    getByTestId('home-page');
  });

  test('can navigate to list page and then detail page', () => {
    const { getByTestId, getByText } = render(<App />);

    // Click in the menu to go to the list page
    const listLink = getByText(/menu link to list/i);
    fireEvent.click(listLink);
    getByTestId('list-page');

    // Click a list item to go to the details page
    const { id } = mockIcons[0];
    const regex = new RegExp(`^item ${id}$`, 'i');
    const itemLink = getByText(regex);
    fireEvent.click(itemLink);
    getByTestId('details-page');
  });
});
