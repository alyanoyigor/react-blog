import React from 'react';
import { CardMedia } from '@mui/material';
import DefaultCardBookImage from '../../../../../assets/img/defaultCardBookImage.webp';

export const BookImage = () => (
  <CardMedia component="img" height="200" image={DefaultCardBookImage} alt="" />
);
