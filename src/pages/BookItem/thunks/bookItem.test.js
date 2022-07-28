import client from '../../../api/client';
import { bookItemFetchStart } from './bookItem';

describe('Testing bookItemFetchStart', () => {
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

  let mockAxiosGet;

  beforeEach(() => {
    mockAxiosGet = jest.spyOn(client, 'get');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return data with valid id', async () => {
    const { _id: id } = response;
    const dispatch = jest.fn();

    mockAxiosGet.mockResolvedValueOnce(response);
    const thunkFunction = bookItemFetchStart({ id });
    const thunkPromise = thunkFunction(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      bookItemFetchStart.pending(thunkPromise.requestId, { id })
    );

    await thunkPromise;

    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      bookItemFetchStart.fulfilled({ data: response }, thunkPromise.requestId, {
        id,
      })
    );
  });

  test('should return error with invalid id', async () => {
    const ERROR = 'ERROR';
    const id = '1';
    const dispatch = jest.fn();

    mockAxiosGet.mockRejectedValueOnce({ message: ERROR });

    const thunkFunction = bookItemFetchStart({ id });
    const thunkPromise = thunkFunction(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      bookItemFetchStart.pending(thunkPromise.requestId, { id })
    );

    await thunkPromise;

    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      bookItemFetchStart.rejected(
        'Rejected',
        thunkPromise.requestId,
        { id },
        ERROR
      )
    );
  });
});
