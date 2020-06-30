import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import styled, { createGlobalStyle } from 'styled-components';

import dynamic from "next/dynamic";

import ticketList from '../Data/ticketList.json';

import ApproveScreen from "../components/ApproveScreen.jsx";
import RejectScreen from "../components/RejectScreen.jsx";

const ScanButton = styled(Button)`
&& {
  height: 6em;
  width: 6em;
  color: white;
  border: 4px solid white;
  border-radius: 5px;
  font-size: 2em;
  margin-top: 3em;
}
`;

const ScannerHeader = styled.div`
  height: 10vh;
  background: rgba(000,999,99,0.4);
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Heading1 = styled.h1`
  height: 8em;
  font-size: 3em;
  display: flex;
  font-weight: lighter;
  margin 0;
  align-items: center;
`;

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false
});

// getTicketList fetches tickets of an event with eventID from the TicketList JSON 
// by filtering for the eventID and returns an array of tickets
// TODO: fetch event tickets for a specific eventID from chain / caching layer
const getTicketList = (eventID) => {
  let ticketArray = [];
  for (let i = 0; i < ticketList.tickets.length; i += 1) {
    if (ticketList.tickets[i].ParentReference === eventID) {
      ticketArray.push(ticketList.tickets[i]);
    }
  }
  return ticketArray;
}

const Reader = () => {
  const [scanner, setScannerOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState('default');
  // TODO: unhardcode event eventID once front end for organizer exists
  const [tickets, setTicketList] = useState(getTicketList("1111111"));

  console.log("tics: ", tickets);

  const handleScan = data => {
    data;
    console.log("scanned:", data);
    // TODO: decrypt data once QR Code generation uses encryption

    // if Ticket is in the ticket array of the event ticket will be approved (or rejected)
    if (tickets.includes(data)) {
      console.log("ticketApproved")
      // TODO: check if Ticket has been used already, if so, show a screen denying entry and error message
      // rejectTicket();
      approveTicket();
    }
  };

  // displays "approved ticket" screen for 2s
  function approveTicket() {
    setScanStatus("approved");
    setTimeout(() => {
      setScanStatus("default");
    }, 2000);
  }

  // displays "rejected ticket" screen for 2s
  function rejectTicket() {
    setScanStatus("denied");
    setTimeout(() => {
      setScanStatus("default");
    }, 2000);
  }

  const handleError = err => {
    console.error(err);
  };

  // opens QR-Code Reader
  const openScanner = () => {
    // await QrReader()
    return(
      <>
        <ScannerHeader>
          Scanning...
        </ScannerHeader>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </>
    )
  };

  return (
    <>
      {process.browser && (
        <div>
          {scanStatus === "default" && (
            <div>
              <div style={{ height: "24em" }}>
                {scanner && openScanner()}
                {!scanner && (
                  // TODO: Query Event Name
                  <Heading1>Welcome to Event 123</Heading1>
                )}
              </div>
              <ScanButton onClick={() => setScannerOpen(!scanner)}>
                {scanner ? "Tap to Close" : "Tap to Scan"}
              </ScanButton>
            </div>
          )}

          {scanStatus === "approved" && (
            <GreenBackground>
              <GlobalStyles />
              <Container>
                <CheckIcon />
                <MessageGreen>ACCESS APPROVED</MessageGreen>
              </Container>
            </GreenBackground>
          )}

          {scanStatus === "denied" && (
            <RedBackground>
              <GlobalStyles />
              <Container>
                <AlertIcon />
                <MessageRed>ACCESS DENIED</MessageRed>
              </Container>
            </RedBackground>
          )}
        </div>
      )}

      {scanStatus === 'approved' && (
        <ApproveScreen />
      )}

      {scanStatus === 'denied' && (
        <RejectScreen />
      )}
    </>
  );
};

export default Reader;
