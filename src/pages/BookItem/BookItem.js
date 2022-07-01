import { CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookItem } from '../../api/books';
import { Error } from '../../components/Error';
import { convertDate } from '../../utils';

export const BookItem = () => {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [bookData, setBookData] = useState({});
  const [error, setError] = useState();

  const getBook = useCallback(async () => {
    try {
      setIsLoading(true);
      const book = await getBookItem(bookId);
      setBookData(book);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    <>
      {error && !isLoading && !bookData && <Error>{error}</Error>}
      {isLoading && !bookData && !error && <CircularProgress />}
      {bookData && !isLoading && !error && (
        <div>
          <h1>{bookData.title}</h1>
          <p>{convertDate(bookData.publishDate)}</p>
          <p>Pages: {bookData.pageCount}</p>
          <p>{bookData.description}</p>
          <p>{bookData.excerpt}</p>
        </div>
      )}
    </>
  );
};
