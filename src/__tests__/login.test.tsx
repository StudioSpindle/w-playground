import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import { render } from '../test-utils';
import App from '../components/App/App';

// TODO: fix Typescript global fetch

afterAll(() => {
  global.fetch.mockClear();
});

describe('Welcome page add Weaviate URL...', () => {
  it('gives error if wrong url is provided', async () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const { debug, getByText, getByLabelText } = render(<App />);
    const button = getByText(/Connect Weaviate/i).closest('button');
    const inputUri = getByLabelText(/Weaviate URL/i);

    expect(inputUri).toHaveValue('');

    fireEvent.change(inputUri, { target: { value: 'http://test-url' } });

    expect(inputUri).toHaveValue('http://test-url');

    await wait(() => {
      if (button) {
        fireEvent.click(button);
      }
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://test-url/v1/graphql', expect.anything());

    expect(getByText(/No Weaviate found at this URL/i)).toBeInTheDocument();
  });
});
