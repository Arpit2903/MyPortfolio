import React from 'react';
import { render } from '@testing-library/react';
import ContactMe from './ContactMe';

test('renders learn react link', () => {
  const { getByText } = render(<ContactMe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
