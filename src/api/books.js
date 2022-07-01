import client from './client';

export const getBookList = async () => {
  try {
    const books = await client.get('/Books');
    return books;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId) => {
  try {
    const book = await client.get(`/Books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};
