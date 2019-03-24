import React from "react";
import App, { Container } from "next/app";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

const Background = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), transparent;
    z-index: -1;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Background>
          <CssBaseline />
          <Component {...pageProps} />
        </Background>
      </Container>
    );
  }
}

export default MyApp;
