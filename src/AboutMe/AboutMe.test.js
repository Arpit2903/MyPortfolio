import React from 'react';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders learn react link', () => {
  const { getByText } = render(<AboutMe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
