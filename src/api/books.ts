import { AxiosRequestConfig } from 'axios';
import { BookUpdate, BookCreate } from '../types';
import client from './client';

export const getBookList = async (config?: AxiosRequestConfig<any>) => {
  try {
    return await client.get('/books', config);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (
  bookId: string,
  config?: AxiosRequestConfig<any>
) => {
  try {
    return await client.get(`/books/${bookId}`, config);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createBook = async (book: BookCreate) => {
  try {
    return await client.post('/books', book);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBook = async (data: {
  id: string;
  bookOptions: BookUpdate;
}) => {
  try {
    const { id, bookOptions } = data;
    return await client.patch(`/books/${id}`, bookOptions);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (bookId: string) => {
  try {
    await client.delete(`/books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
