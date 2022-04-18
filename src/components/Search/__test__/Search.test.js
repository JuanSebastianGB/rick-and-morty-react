import React from 'react';
import Search from '../Search';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('The component Render a specific Content', () => {
    const { getByTestId } = render(<Search />);
    const renderedComponent = getByTestId('search');
    expect(renderedComponent.textContent).toMatch(/Search/);
});