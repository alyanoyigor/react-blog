import client from './client';

export const getBookList = async () => {
  try {
    const booksData = await client.get('/books');
    return booksData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId) => {
  try {
    const bookData = await client.get(`/books/${bookId}`);
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
