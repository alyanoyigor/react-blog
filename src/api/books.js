import client from './client';

export const getBookList = async () => {
  try {
    const booksData = await client.get('/books');
    return booksData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId, config) => {
  try {
    const bookData = await client.get(`/books/${bookId}`, config);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createBook = async (book) => {
  try {
    const bookData = await client.post('/books', book);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBook = async (payload) => {
  try {
    const { id, bookOptions } = payload;
    const bookData = await client.patch(`/books/${id}`, bookOptions);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (payload) => {
  try {
    const { id } = payload;
    await client.delete(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
