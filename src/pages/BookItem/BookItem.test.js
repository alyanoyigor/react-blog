import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithRedux } from '../../test';
import { renderWithProviders } from '../../test';
import { BookItem } from './BookItem';

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

const handlers = [
  rest.get('/books/:bookId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: response }), ctx.delay(200));
  }),
];
const server = setupServer(...handlers);

describe('BookItem', () => {
  const bookItemOptions = {
    route: `/books/${response._id}`,
    params: '/books/:bookId',
  };

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  test('should render', () => {
    const { container } = renderWithProviders(<BookItem />, bookItemOptions);
    expect(container).toBeInTheDocument();
  });

  test('should call thunk inside useEffect after mounting', async () => {
    act(() => {
      renderWithProviders(<BookItem />, bookItemOptions);
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('preloader'));

    const title = await screen.findByTestId('book-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual(response.title);
  });

  // test('should reset data after unmounting', () => {});

  // test('should show preloader when data is loading', () => {});

  // test('should match to snapshot with success response data', () => {});

  // test('should match to snapshot with error response data', () => {});

  // test('should move to previous path after back button clicking', () => {});
});
