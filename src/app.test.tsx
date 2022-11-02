import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app';

it('Test App', async () => {
  render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent('Hello World');
});
