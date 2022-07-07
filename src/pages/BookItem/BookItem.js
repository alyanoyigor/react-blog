import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { getBookFetch } from '../../store/actions/books';
import { StyledBackIcon, StyledButton } from './styled';

export const BookItem = () => {
  const { bookId } = useParams();
  const { bookData, error, loading } = useSelector(
    (state) => state.booksReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBookFetch(bookId));
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
        </>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
