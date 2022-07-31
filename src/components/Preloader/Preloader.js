import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Preloader = () => {
  return (
    <Box
      data-testid="preloader"
      position="fixed"
      left="50%"
      top="50%"
      zIndex="100"
    >
      <CircularProgress size="64px" color="secondary" />
    </Box>
  );
};
