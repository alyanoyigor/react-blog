import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URLS } from '../../constants';
import { convertDate } from '../../utils';

export const BookItem = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [bookData, setBookData] = useState(null);

  const getBook = useCallback(async () => {
    try {
      setIsLoading(true);
      const book = await axios.get(`${URLS.BOOKS}/${id}`);
      setBookData(book.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  if (isLoading || !bookData) {
    return <CircularProgress />;
  }

  const { title, description, pageCount, publishDate, excerpt } = bookData;
  const date = convertDate(publishDate);
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>Pages: {pageCount}</p>
      <p>{description}</p>
      <p>{excerpt}</p>
    </>
  );
};
