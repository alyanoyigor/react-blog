import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Preloader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="calc(100vh - 80px)"
    >
      <CircularProgress size="64px" color="secondary" />
    </Box>
  );
};
