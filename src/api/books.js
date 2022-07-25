import client from './client';

/**
 * @typedef {object} BookData
 * @property {string}  _id
 * @property {string}  title
 * @property {string}  description
 * @property {string}  date
 * @property {number}  pages
 * @property {string}  excerpt
 * @property {string}  createdAt
 * @property {string}  updatedAt   - Last updated date of object
 * @property {number}  __v         - Version of object
 */

/**
 * @param {AxiosRequestConfig<any>} config
 * @returns {Array<BookData> | Promise<never, string>}
 */
export const getBookList = async (config) => {
  try {
    const booksData = await client.get('/books', config);
    return booksData;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {number} bookId
 * @param {AxiosRequestConfig<any>} config
 * @returns {BookData | Promise<never, string>}
 */
export const getBookItem = async (bookId, config) => {
  try {
    const bookData = await client.get(`/books/${bookId}`, config);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @typedef {object} BookCreateData
 * @property {string}  title
 * @property {string}  description
 * @property {number}  pages
 * @property {number}  excerpt
 *
 * @param {BookCreateData} book
 * @returns {BookData | Promise<never, string>}
 */
export const createBook = async (book) => {
  try {
    const bookData = await client.post('/books', book);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @typedef {object} BookUpdateData
 * @property {string}  [title]
 * @property {string}  [description]
 * @property {number}  [pages]
 * @property {number}  [excerpt]
 *
 * @param {{id: number, bookOptions: BookUpdateData}} data
 * @returns {BookData | Promise<never, string>}
 */
export const updateBook = async (data) => {
  try {
    const { id, bookOptions } = data;
    const bookData = await client.patch(`/books/${id}`, bookOptions);
    return bookData;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {number} bookId
 * @returns {undefined | Promise<never, string>}
 */
export const deleteBook = async (bookId) => {
  try {
    await client.delete(`/books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
