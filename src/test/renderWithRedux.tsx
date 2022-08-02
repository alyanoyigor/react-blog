import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../store';

export const renderWithRedux = (component: ReactNode, state: RootState) => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(state);

  return render(<Provider store={store}>{component}</Provider>);
};
