import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Check from '@material-ui/icons/CheckCircleOutline';
import Alert from '@material-ui/icons/Close';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        font-family: 'Roboto', sans-serif;
        margin: unset;
    }
`;

const StyledButton = styled(Button)`
    && {
    font-size: 2em;
    text-align: center;
    color: white;
    height: 6em;
    width: 10em;
    background: transparent
    display: flex;
    flex-direction: column;
    display: flex;
    }
`;

const CheckIcon = styled(Check)`
  && {
    height: 30em;
    width: 30em;
  }
`;

const AlertIcon = styled(Alert)`
  && {
    height: 30em;
    width: 30em;
  }
`;

const Background = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
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

const MessageGreen = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: green;
    width: 5em;
    height 3em;
    background: transparent;
`;

const GreenBackground = styled.div`
    font-size: 1.5em;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, green 0%, rgba(255, 255, 255, 0) 100%), white;
`;

const RedBackground = styled.div`
    font-size: 1.5em;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, red 0%, rgba(255, 255, 255, 0) 100%), white;
`;

// TODO: change fonts, put table logic in another component
function wallet() {
  const [scanStatus, setScanStatus] = useState('default');

  function approveTicket() {
    setScanStatus('approved');
    setTimeout(() => {
      setScanStatus('default');
    }, 2000);
  }

  function rejectTicket() {
    setScanStatus('denied');
    setTimeout(() => {
      setScanStatus('default');
    }, 2000);
  }

  return (
    <div>
      {scanStatus === 'default' && (
        <Background>
          <GlobalStyles />
          <StyledButton onClick={approveTicket}>
            Green
            {console.log(scanStatus)}
          </StyledButton>
          <StyledButton onClick={rejectTicket}>Red</StyledButton>
        </Background>
      )}
      {scanStatus === 'approved' && (
        <GreenBackground>
          <GlobalStyles />
          <Container>
            <CheckIcon />
            <MessageGreen>ACCESS APPROVED</MessageGreen>
          </Container>
        </GreenBackground>
      )}
      {scanStatus === 'denied' && (
        <RedBackground>
          <GlobalStyles />
          <Container>
            <AlertIcon />
            <MessageRed>ACCESS DENIED</MessageRed>
          </Container>
        </RedBackground>
      )}
    </div>
  );
}

// TopCell.propTypes = {
//   index: PropTypes.number,
//   style: PropTypes.objectOf(PropTypes.any)
// };

// TopCell.defaultProps = {
//   index: 1,
//   style: PropTypes.object
// };

export default wallet;
