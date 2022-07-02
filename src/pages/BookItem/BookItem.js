import React from 'react';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getBookItem } from '../../api/books';
import { Error } from '../../components/Error';
import { useAxios } from '../../hooks';
import { convertDate } from '../../utils';

export const BookItem = () => {
  const { bookId } = useParams();
  const {
    error,
    data: bookData,
    loading,
  } = useAxios(() => getBookItem(bookId));

  return (
    <>
      {loading && !bookData && !error && <CircularProgress />}
      {bookData && !loading && !error && (
        <div>
          <h1>{bookData.title}</h1>
          <p>{convertDate(bookData.publishDate)}</p>
          <p>Pages: {bookData.pageCount}</p>
          <p>{bookData.description}</p>
          <p>{bookData.excerpt}</p>
        </div>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
