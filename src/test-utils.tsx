import React from 'react';
import { render, RenderOptions, RenderResult, Queries } from '@testing-library/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MemoryRouter } from 'react-router-dom';
import themeSpec from './themes/default';
import { PlaygroundProvider } from './playground-context';
import '@testing-library/jest-dom/extend-expect';

const AllTheProviders: React.FunctionComponent<{}> = ({ children }) => (
  <PlaygroundProvider>
    <MuiThemeProvider theme={themeSpec.theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </MuiThemeProvider>
  </PlaygroundProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions<Queries>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
