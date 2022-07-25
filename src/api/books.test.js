import axios from 'axios';
import { getBookList } from './books';

jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe('getBookList', () => {
  let response;

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

  test('Get books', async () => {
    axios.get.mockReturnValue(response);
    const booksData = await getBookList();
    expect(axios.get).toBeCalledTimes(1);
    expect(booksData.error).toBe(false);
    expect(booksData.data.length).toBe(2);
  });
});
