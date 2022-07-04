import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getBookItem } from '../../api/books';
import { Error } from '../../components/Error';
import { useAxios } from '../../hooks';
import { Preloader } from '../../components/Preloader';

export const BookItem = () => {
  const { bookId } = useParams();
  const {
    error,
    data: bookData,
    loading,
  } = useAxios(() => getBookItem(bookId));

  return (
    <>
      {loading && !bookData && !error && <Preloader />}
      {bookData && !loading && !error && (
        <div>
          <h1>{bookData.title}</h1>
          <p>{moment(bookData.publishDate).format('MMM DD, YYYY')}</p>
          <p>{bookData.pageCount} pages</p>
          <p>{bookData.description}</p>
          <p>{bookData.excerpt}</p>
        </div>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
