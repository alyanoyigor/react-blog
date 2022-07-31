import client from './client';
import {
  getBookList,
  getBookItem,
  createBook,
  updateBook,
  deleteBook,
} from './books';

describe('Testing books api', () => {
  const failedResponse = { error: true, data: {} };
  let response;

  describe('Testing getBookList', () => {
    let mockAxiosGet;

    beforeEach(() => {
      mockAxiosGet = jest.spyOn(client, 'get');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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

    test('should runs', async () => {
      mockAxiosGet.mockResolvedValueOnce(response);
      await getBookList();
      expect(mockAxiosGet).toBeCalledTimes(1);
    });

    test('should receive success data', async () => {
      mockAxiosGet.mockResolvedValueOnce(response);

      const booksData = await getBookList();

      expect(booksData.error).toBe(false);
      expect(booksData.data.length).toBe(2);
    });

    test('should receive failed data', async () => {
      mockAxiosGet.mockRejectedValueOnce(failedResponse);
      await expect(getBookList).rejects.toEqual(failedResponse);
    });
  });

  describe('Testing getBookItem', () => {
    let mockAxiosGet;
    let id;

    beforeEach(() => {
      mockAxiosGet = jest.spyOn(client, 'get');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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
      id = response.data._id;
    });

    test('should runs', async () => {
      mockAxiosGet.mockResolvedValueOnce(response);
      await getBookItem(id);

      expect(mockAxiosGet).toBeCalledTimes(1);
      expect(mockAxiosGet).toHaveBeenCalledWith(`/books/${id}`, undefined);
    });

    test('should receive success data', async () => {
      mockAxiosGet.mockResolvedValueOnce(response);
      const bookData = await getBookItem(id);

      expect(bookData.error).toBe(false);
      expect(bookData.data._id).toBe(id);
    });

    test('should receive failed data', async () => {
      const bookId = '1';
      mockAxiosGet.mockRejectedValueOnce(failedResponse);

      await expect(() => getBookItem(bookId)).rejects.toEqual(failedResponse);
    });
  });

  describe('Testing createBook', () => {
    const enteredData = {
      title: '2',
      description: '2',
      pages: 2,
      excerpt: '2',
    };
    let mockAxiosPost;

    beforeEach(() => {
      mockAxiosPost = jest.spyOn(client, 'post');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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

    test('should runs', async () => {
      mockAxiosPost.mockResolvedValueOnce(response);
      await createBook(enteredData);

      expect(mockAxiosPost).toBeCalledTimes(1);
      expect(mockAxiosPost).toHaveBeenCalledWith(`/books`, enteredData);
    });

    test('should receive success data', async () => {
      mockAxiosPost.mockResolvedValueOnce(response);
      const bookData = await createBook(enteredData);

      expect(bookData.error).toBe(false);
      expect(bookData.data).toEqual(expect.objectContaining(enteredData));
    });

    test('should receive failed data', async () => {
      mockAxiosPost.mockRejectedValueOnce(failedResponse);

      await expect(() => createBook(enteredData)).rejects.toEqual(
        failedResponse
      );
    });
  });

  describe('Testing updateBook', () => {
    const enteredData = {
      title: '2',
      description: '2',
      pages: 2,
      excerpt: '2',
    };
    let id;
    let mockAxiosPatch;

    beforeEach(() => {
      mockAxiosPatch = jest.spyOn(client, 'patch');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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
      id = response.data._id;
    });

    test('should runs correct', async () => {
      mockAxiosPatch.mockResolvedValueOnce(response);
      await updateBook({ id, bookOptions: enteredData });

      expect(mockAxiosPatch).toBeCalledTimes(1);
      expect(mockAxiosPatch).toHaveBeenCalledWith(`/books/${id}`, enteredData);
    });

    test('should receive success data', async () => {
      mockAxiosPatch.mockResolvedValueOnce(response);
      const bookData = await updateBook({ id, bookOptions: enteredData });

      expect(bookData.error).toBe(false);
      expect(bookData.data).toEqual(expect.objectContaining(enteredData));
    });

    test('should receive failed data', async () => {
      mockAxiosPatch.mockRejectedValueOnce(failedResponse);

      await expect(() =>
        updateBook({ id, bookOptions: enteredData })
      ).rejects.toEqual(failedResponse);
    });
  });

  describe('Testing deleteBook', () => {
    let id;
    let mockAxiosDelete;

    beforeEach(() => {
      mockAxiosDelete = jest.spyOn(client, 'delete');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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
      id = response.data._id;
    });

    test('should runs correct', async () => {
      mockAxiosDelete.mockResolvedValueOnce(response);
      await deleteBook(id);

      expect(mockAxiosDelete).toBeCalledTimes(1);
      expect(mockAxiosDelete).toHaveBeenCalledWith(`/books/${id}`);
    });

    test("should don't erroring", async () => {
      mockAxiosDelete.mockResolvedValueOnce(response);

      await expect(Promise.resolve(deleteBook(id))).resolves.not.toEqual(
        failedResponse
      );
    });

    test('should receive failed data', async () => {
      mockAxiosDelete.mockRejectedValueOnce(failedResponse);

      await expect(() => deleteBook(id)).rejects.toEqual(failedResponse);
    });
  });
});
