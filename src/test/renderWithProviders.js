import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { setupStore } from '../store';

export const renderWithProviders = (
  ui,
  {
    route = '/',
    preloadedState = {},
    store = setupStore(preloadedState),
    history = createMemoryHistory({ initialEntries: [route] }),
    params,
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]} history={history}>
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
