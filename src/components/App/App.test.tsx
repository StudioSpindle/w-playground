import React from 'react';
import { render } from '../../test-utils';
import App from './App';

it('matches snapshot', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
