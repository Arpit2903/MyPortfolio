import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';

test('renders learn react link', () => {
  const { getByText } = render(<Projects />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
