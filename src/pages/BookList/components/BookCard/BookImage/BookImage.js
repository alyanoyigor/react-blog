import React from 'react';
import { CardMedia, Skeleton } from '@mui/material';
import { loadImg } from '../../../../../utils';
import { useAxios } from '../../../../../hooks';

export const BookImage = (props) => {
  const { bookId } = props;
  const {
    data: src,
    loading,
    error,
  } = useAxios(() => loadImg(`https://picsum.photos/id/${bookId + 5}/500/500`));

  return (
    <>
      {loading && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          sx={{ bgcolor: 'grey.900' }}
        />
      )}
      {src && !loading && !error && (
        <CardMedia component="img" height="200" image={src} alt="" />
      )}
      {error && !loading && (
        <CardMedia
          component="img"
          height="200"
          image={
            'https://kravmaganewcastle.com.au/wp-content/uploads/2017/04/default-image-620x600.jpg'
          }
          alt=""
        />
      )}
    </>
  );
};
