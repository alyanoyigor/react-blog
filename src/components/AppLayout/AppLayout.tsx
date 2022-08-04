import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../../styles';
import { Header } from '../Header';

export const AppLayout = () => (
  <>
    <GlobalStyle />
    <ToastContainer
      autoClose={3000}
      position="top-right"
      hideProgressBar={true}
    />
    <Header />
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </>
);
