import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { EmptyObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RootState, setupStore, Store } from '../store';

type RenderParams = {
  route?: string;
  preloadedState?: RootState | EmptyObject;
  store?: Store;
  params?: string;
};

export const renderWithProviders = (
  ui: ReactElement,
  {
    route = '/',
    preloadedState = {},
    store = setupStore(preloadedState),
    params,
    ...renderOptions
  }: RenderParams = {}
) => {
  const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={params} element={children} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };
  return {
    store,
    history,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
