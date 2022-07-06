import client from './client';

export const getBookList = async () => {
  try {
    const booksData = await client.get('/Books');
    return booksData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId) => {
  try {
    const bookData = await client.get(`/Books/${bookId}`);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};
