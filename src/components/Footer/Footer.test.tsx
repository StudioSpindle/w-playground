import React from 'react';
import { render } from '../../test-utils';
import Footer from './Footer';

it('matches snapshot', () => {
  const container = render(<Footer />);
  expect(container).toMatchSnapshot();
});
