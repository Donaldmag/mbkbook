import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  // fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
