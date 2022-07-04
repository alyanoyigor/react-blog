import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../../styled';
import { Header } from '../Header';

export const AppLayout = () => (
  <>
    <GlobalStyle />
    <ToastContainer
      autoClose={3000}
      theme="dark"
      position="bottom-left"
      hideProgressBar={true}
    />
    <Header />
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </>
);
