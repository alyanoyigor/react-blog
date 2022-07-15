import React from 'react';
import { CardMedia, Skeleton } from '@mui/material';
import { loadImg } from '../../../../../utils';
import { useAxios } from '../../../../../hooks';

export const BookImage = () => {
  const randomNumber = Math.random() * 100;

  const {
    data: src,
    loading,
    error,
  } = useAxios(() =>
    loadImg(`https://picsum.photos/id/${Math.floor(randomNumber)}/500/500`)
  );

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
            'https://i0.wp.com/streampeak.com.sg/wp-content/themes/firstcom/img/sample.jpg'
          }
          alt=""
        />
      )}
    </>
  );
};
