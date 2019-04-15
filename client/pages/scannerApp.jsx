import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import styled, { createGlobalStyle } from 'styled-components';
import Check from '@material-ui/icons/CheckCircleOutline';
import Alert from '@material-ui/icons/Close';

import dynamic from "next/dynamic";

const ScanButton = styled(Button)`
&& {
  height: 6em;
  width: 6em;
  color: white;
  border: 4px solid white;
  border-radius: 5px;
  font-size: 2em;
  margin-top: 2em;
}
`;

const Heading1 = styled.h1`
  height: 8em;
  font-size: 3em;
  display: flex;
  font-weight: lighter;
  margin 0;
  align-items: center;
`;

const CheckIcon = styled(Check)`
  && {
    height: 15em;
    width: 15em;
  }
`;

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

const MessageGreen = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: green;
    width: 5em;
    height 3em;
    background: transparent;
`;

const GreenBackground = styled.div`
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, green 0%, rgba(255, 255, 255, 0) 100%), white;
`;

const RedBackground = styled.div`
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, red 0%, rgba(255, 255, 255, 0) 100%), white;
`;

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false
});


// it is this library: https://github.com/JodusNodus/react-qr-reader
// the error has to do with webrtc-adapter module

const Reader = () => {
  const [scanner, setScannerOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState('default');
  
  const handleScan = data => {
    data;
    console.log("scanned:", data);
    // TODO: check if data is in array of approved tickets, fetched from the chain
    // 0x12345 is a hardcoded valid ticket
    if (data === "0x12345") {
      approveTicket();
    }
    // TODO: if data is a ticket that has already been scanned
    // 0x99999 is a hardcoded invalid ticket
    if (data === "0x99999") {
      rejectTicket();
    }
  };
  
  // displays "approved ticket" screen for 2s
  function approveTicket() {
    setScanStatus('approved');
    setTimeout(() => {
      setScanStatus('default');
    }, 2000);
  }

  // displays "rejected ticket" screen for 2s
  function rejectTicket() {
    setScanStatus('denied');
    setTimeout(() => {
      setScanStatus('default');
    }, 2000);
  }

  const handleError = err => {
    console.error(err);
  };

  // opens QR-Code Reader
  const openScanner = () => {
    // await QrReader()
    return(
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: "100%", width: '100%' }}
    />)
  };

  return (
  <>
    {process.browser && <div>
      {scanStatus === 'default' && (
        <div>
          <div style={{ height: "24em" }}>
            {scanner && openScanner()}             
            { !scanner && 
              // TODO: Query Event Name
              <Heading1> 
                Welcome to Event 123
              </Heading1>
            }
          </div>
          <ScanButton onClick={() => setScannerOpen(!scanner)}>
            {scanner ? "Tap to Close" : "Tap to Scan"}
          </ScanButton>
        </div>
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

    </div>}
    </>
  );
};

export default Reader;
