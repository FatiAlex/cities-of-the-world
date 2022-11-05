import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header.component';

test("Test 'Header' Component", () => {
  render(<Header />);

  expect(screen.getByTestId('header-icon-test')).toBeInTheDocument();
});
