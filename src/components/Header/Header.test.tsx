import React from 'react';
import { render } from '../../test-utils';
import Header from './Header';

it('matches snapshot', () => {
  const container = render(<Header />);
  expect(container).toMatchSnapshot();
});
