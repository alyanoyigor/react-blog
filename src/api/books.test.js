import { getBookList, getBookItem } from './books';
import client from './client';

describe('Testing books api funcs', () => {
  const failedResponse = { error: true, data: {} };
  let response;
  let mockAxiosGet;

  beforeEach(() => {
    mockAxiosGet = jest.spyOn(client, 'get');
  });

  describe('Testing getBookList func', () => {
    beforeAll(() => {
      response = {
        error: false,
        data: [
          {
            _id: '62de6a961301da01ad8e4081',
            title: '1',
            description: '1',
            date: '2022-07-25T09:28:44.802Z',
            pages: 1,
            excerpt: '1',
            createdAt: '2022-07-25T10:04:06.198Z',
            updatedAt: '2022-07-25T10:07:38.841Z',
            __v: 0,
          },
          {
            _id: '62de6ab61301da01ad8e4084',
            title: '2',
            description: '2',
            date: '2022-07-25T09:28:44.802Z',
            pages: 2,
            excerpt: '2',
            createdAt: '2022-07-25T10:04:38.247Z',
            updatedAt: '2022-07-25T10:04:38.247Z',
            __v: 0,
          },
        ],
      };
    });

    test('getBookList runs', async () => {
      await getBookList();
      expect(mockAxiosGet).toBeCalledTimes(1);
    });

    test('getBookList succeeded', async () => {
      mockAxiosGet.mockImplementationOnce(() => Promise.resolve(response));

      const booksData = await getBookList();

      expect(booksData.error).toBe(false);
      expect(booksData.data.length).toBe(2);
    });

    test('getBookList failed', async () => {
      mockAxiosGet.mockImplementationOnce(() => Promise.reject(failedResponse));
      await expect(getBookList).rejects.toEqual(failedResponse);
    });
  });

  describe('Testing getBookItem', () => {
    beforeAll(() => {
      response = {
        error: false,
        data: {
          _id: '62de6ab61301da01ad8e4084',
          title: '2',
          description: '2',
          date: '2022-07-25T09:28:44.802Z',
          pages: 2,
          excerpt: '2',
          createdAt: '2022-07-25T10:04:38.247Z',
          updatedAt: '2022-07-25T10:04:38.247Z',
          __v: 0,
        },
      };
    });

    test('getBookItem runs', async () => {
      const bookId = '1';
      await getBookItem(bookId);

      expect(mockAxiosGet).toBeCalledTimes(1);
      expect(mockAxiosGet).toHaveBeenCalledWith(`/books/${bookId}`, undefined);
    });

    test('getBookItem succeeded', async () => {
      const bookId = '62de6ab61301da01ad8e4084';
      mockAxiosGet.mockImplementationOnce(() => Promise.resolve(response));
      const bookData = await getBookItem(bookId);

      expect(bookData.error).toBe(false);
      expect(bookData.data._id).toBe(bookId);
    });

    test('getBookItem failed', async () => {
      const bookId = '1';
      mockAxiosGet.mockImplementationOnce(() => Promise.reject(failedResponse));

      await expect(() => getBookItem(bookId)).rejects.toEqual(failedResponse);
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
