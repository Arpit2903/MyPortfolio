import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('renders learn react link', () => {
  const { getByText } = render(<Skills />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
