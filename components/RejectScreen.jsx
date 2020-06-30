import React from 'react';
import Alert from '@material-ui/icons/Close';
import styled from 'styled-components';

const AlertIcon = styled(Alert)`
  && {
    height: 15em;
    width: 15em;
  }
`;

const Container = styled.div`
  font-size: 1.5em;
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MessageRed = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: red;
    width: 5em;
    height 3em;
    background: transparent;
`;

const RedBackground = styled.div`
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, red 0%, rgba(255, 255, 255, 0) 100%), white;
`;

const RejectScreen = () => (
  <RedBackground>
    <Container>
      <AlertIcon />
      <MessageRed>ACCESS APPROVED</MessageRed>
    </Container>
  </RedBackground>
);

export default RejectScreen;
