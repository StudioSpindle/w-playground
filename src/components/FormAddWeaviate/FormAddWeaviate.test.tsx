import * as React from 'react';
import { render } from '../../test-utils';
import FormAddWeaviateUrl from './FormAddWeaviate';

it('matches snapshot', () => {
  const container = render(
    <FormAddWeaviateUrl handleSubmit={jest.fn()} handleUrlChange={jest.fn()} />,
  );
  expect(container).toMatchSnapshot();
});
