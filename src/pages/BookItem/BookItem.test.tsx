import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { renderWithProviders } from '../../test';
import { setupStore } from '../../store';
import { BookItem } from './BookItem';

const initialState = { loading: true, error: null, data: {} };

const response = {
  _id: '62de6a961301da01ad8e4081',
  title: '1',
  description: '1',
  date: '2022-07-25T09:28:44.802Z',
  pages: 1,
  excerpt: '1',
  createdAt: '2022-07-25T10:04:06.198Z',
  updatedAt: '2022-07-25T10:07:38.841Z',
  __v: 0,
};

const bookItemOptions = {
  route: `/books/${response._id}`,
  params: '/books/:bookId',
};

const handlers = [
  rest.get('/books/:bookId', (req, res, ctx) => {
    const bookId = req.params.bookId;

    if (bookId !== response._id) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Invalid id' }),
        ctx.delay(200)
      );
    }

    return res(ctx.status(200), ctx.json({ data: response }), ctx.delay(200));
  }),
];

const server = setupServer(...handlers);

describe('BookItem', () => {
  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  test('should render', () => {
    const { container } = renderWithProviders(<BookItem />, bookItemOptions);
    expect(container).toBeInTheDocument();
  });

  test('should call useEffect after mounting and get book data', async () => {
    renderWithProviders(<BookItem />, bookItemOptions);
    const title = await screen.findByTestId('book-title');

    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual(response.title);
  });

  test('should reset data after unmounting', async () => {
    const store = setupStore({});
    const { unmount } = renderWithProviders(<BookItem />, {
      ...bookItemOptions,
      store,
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('preloader'));
    unmount();

    expect(store.getState().bookItem).toEqual(initialState);
  });

  test('should show preloader when data is loading', async () => {
    renderWithProviders(<BookItem />, bookItemOptions);
    const preloader = screen.getByTestId('preloader');

    expect(preloader).toBeInTheDocument();
  });

  test('should match to snapshot with success response data', async () => {
    const { container } = renderWithProviders(<BookItem />, bookItemOptions);
    await waitFor(() => screen.getByTestId('book-title'));

    expect(container).toMatchSnapshot();
  });

  test('should return error component when receive error data response', async () => {
    renderWithProviders(<BookItem />, {
      ...bookItemOptions,
      route: '/books/1',
    });
    const error = await screen.findByTestId('error');

    expect(error).toBeInTheDocument();
  });

  test('should move to previous path after back button clicking', async () => {
    renderWithProviders(<BookItem />, bookItemOptions);
    const goBackButton = await screen.findByText(/Back/i);

    fireEvent.click(goBackButton);

    expect(window.location.pathname).toBe('/');
  });
});
