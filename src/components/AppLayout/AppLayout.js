import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../styled';
import { Header } from '../Header';

export const AppLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
