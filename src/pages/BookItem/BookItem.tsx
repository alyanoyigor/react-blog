import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { useAppDispatch } from '../../store';
import { bookItemFetchStart } from './thunks/bookItem';
import { bookItemResetData } from './reducers/bookItem';
import { StyledBackIcon, StyledButton } from './styled';

import * as selectors from './selectors/bookItem';

export const BookItem = () => {
  const { bookId } = useParams();

  const {
    loading,
    data: bookData,
    error,
  } = useSelector(selectors.bookItemSelector);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookId) {
      dispatch(bookItemFetchStart({ id: bookId }));
    }
    return () => {
      dispatch(bookItemResetData());
    };
  }, [dispatch, bookId]);

  return (
    <>
      {loading && !error && <Preloader />}
      {bookData && !loading && !error && (
        <>
          <StyledButton onClick={() => navigate(-1)}>
            <StyledBackIcon />
            <span>Back</span>
          </StyledButton>
          <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            <Typography
              textAlign="center"
              mb={1}
              variant="h4"
              component="h1"
              data-testid="book-title"
            >
              {bookData.title}
            </Typography>
            <Typography textAlign="center" variant="subtitle1" component="p">
              {moment(bookData.date).format('MMM DD, YYYY')}
            </Typography>
            <Typography textAlign="center">{bookData.pages} pages</Typography>
            <Typography textAlign="center">{bookData.description}</Typography>
            <Typography textAlign="center">{bookData.excerpt}</Typography>
          </Box>
        </>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
