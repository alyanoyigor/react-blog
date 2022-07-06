import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getBookItem } from '../../api/books';
import { Error } from '../../components/Error';
import { useAxios } from '../../hooks';
import { Preloader } from '../../components/Preloader';
import { Box, Typography } from '@mui/material';

export const BookItem = () => {
  const { bookId } = useParams();
  const {
    error,
    data: bookData,
    loading,
  } = useAxios(() => getBookItem(bookId, true));

  return (
    <>
      {loading && !error && <Preloader />}
      {bookData && !loading && !error && (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Typography mb={1} variant="h4" component="h1">
            {bookData.title}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {moment(bookData.publishDate).format('MMM DD, YYYY')}
          </Typography>
          <Typography>{bookData.pageCount} pages</Typography>
          <Typography>{bookData.description}</Typography>
          <Typography textAlign="center">{bookData.excerpt}</Typography>
        </Box>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
