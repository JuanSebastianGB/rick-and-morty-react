/* eslint-disable no-undef */
import Search from '../Search';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('The component Render a specific Content', () => {
  const { getByTestId } = render(<Search />);
  const renderedComponent = getByTestId('search');
  expect(renderedComponent.textContent).toMatch(/Search/);
});
