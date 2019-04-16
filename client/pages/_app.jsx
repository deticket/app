import React from 'react';
import App, { Container } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        font-family: 'Roboto', sans-serif;
        margin: unset;
    }
`;

const Background = styled.div`
    font-size: 1em;
    text-align: center;
    color: white;
    width: 100vw;
    min-height 100vh;
    background-image: linear-gradient(to top, #1E90FF 0%, #330867 100%);
    z-index: -1;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Background>
          <GlobalStyles />
          <CssBaseline />
          <Component {...pageProps} />
        </Background>
      </Container>
    );
  }
}

export default MyApp;
