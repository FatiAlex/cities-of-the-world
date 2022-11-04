import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../layout.component';

test('Test App', async () => {
  render(<Layout />);

  expect(screen.getByRole('')).toHaveTextContent('Cities List');
});
