import React from "react";
import { render, RenderOptions, RenderResult, queries, Queries } from '@testing-library/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themeSpec from './themes/default';

const AllTheProviders: React.FunctionComponent<{}> = ({ children }) => (
  <MuiThemeProvider theme={themeSpec.theme}>
    {children}
  </MuiThemeProvider>
);

const customRender = (ui: React.ReactElement, options?:RenderOptions<Queries>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render };
