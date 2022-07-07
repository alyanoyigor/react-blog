import {
  BEGIN_LOADING,
  END_LOADING,
  GET_BOOK,
  GET_BOOKS,
  SET_CURRENT_PAGE,
} from './actionTypes';

export const getBooksFetch = () => ({ type: GET_BOOKS });
export const getBookFetch = (bookId) => ({ type: GET_BOOK, payload: bookId });
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const beginLoading = () => ({ type: BEGIN_LOADING });
export const endLoading = () => ({ type: END_LOADING });
