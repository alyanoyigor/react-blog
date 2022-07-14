import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { bookItemFetchStart } from './reducers/bookItem';
import { StyledBackIcon, StyledButton } from './styled';

import * as selectors from './selectors/bookItem';

export const BookItem = () => {
  const { bookId } = useParams();

  const loading = useSelector(selectors.bookItemLoadingSelector);

  const bookData = useSelector(selectors.bookItemDataSelector);
  const error = useSelector(selectors.bookItemErrorSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(bookItemFetchStart({ id: bookId }));
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
            <Typography textAlign="center" mb={1} variant="h4" component="h1">
              {bookData.title}
            </Typography>
            <Typography textAlign="center" variant="subtitle1" component="p">
              {moment(bookData.publishDate).format('MMM DD, YYYY')}
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
