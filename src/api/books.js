import { Book, BookUpdate, BookCreate } from '../types';
import client from './client';

/**
 * @typedef {Object} BookData
 * @property {string}  _id         - Book id
 * @property {string}  title       - Book title
 * @property {string}  description - Book description
 * @property {string}  date        - Book publish date
 * @property {number}  pages       - Amount pages of book
 * @property {string}  excerpt     - Book excerpt
 * @property {string}  createdAt   - Object creation date
 * @property {string}  updatedAt   - Object Last updated date
 * @property {number}  __v         - Version of the object
 */

/**
 * @param {AxiosRequestConfig<any>} [config]
 * @returns {Array<Book> | Promise<never, string>}
 */
export const getBookList = async (config) => {
  try {
    return await client.get('/books', config);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {string} bookId
 * @param {AxiosRequestConfig<any>} config
 * @returns {Book | Promise<never, string>}
 */
export const getBookItem = async (bookId, config) => {
  try {
    return await client.get(`/books/${bookId}`, config);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {BookCreate} book
 * @returns {BookData | Promise<never, string>}
 */
export const createBook = async (book) => {
  try {
    return await client.post('/books', book);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {{id: string, bookOptions: BookUpdate}} data
 * @returns {BookData | Promise<never, string>}
 */
export const updateBook = async (data) => {
  try {
    const { id, bookOptions } = data;
    return await client.patch(`/books/${id}`, bookOptions);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * @param {string | number} bookId
 * @returns {undefined | Promise<never, string>}
 */
export const deleteBook = async (bookId) => {
  try {
    await client.delete(`/books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
