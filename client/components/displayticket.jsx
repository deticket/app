import React, { useState } from 'react';
import BackIcon from '@material-ui/icons/ArrowBack';
import FingerIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

// import Background from '../components/Background.jsx';
import QRCode from './QRCode';
import ticketList from '../Data/ticketList';
import eventList from '../Data/eventList';

const HeaderCell = styled.div`
  font-size: 1em;
  color: rgba(69, 69, 69, 1);
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 2.2em;
  padding-left: 0em;
  padding-right: 1em;
`;

const ContentCell = styled.div`
  font-size: 1.5em;
  color: black;
  background: transparent;
  height: 1.7em;
  padding-left: 0em;
  padding-right: 1em;
  margin-top: 0.2em;
`;

const ContentCellSmall = styled.div`
  font-size: 1.2em;
  color: black;
  background: transparent;
  height: 1.7em;
  padding-left: 0em;
  padding-right: 1em;
  margin-top: 0.2em;
`;

const TopPaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
    padding-top: 2em;
    padding-bottom: 1.5em;
    height: 19em;
  }
`;

const MiddlePaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
  }
`;

const BottomPaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 7%;
  }
`;

const CounterContainer = styled.div`
  font-size: 1.2em;
  margin-top: 1em;
`;

const MiddleContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 7%;
  padding-top: 0.2em;
  padding-bottom: 0.6em;

`;

const StyledHeader = styled.header`
  justify-content: flex-start;
  margin: auto;
  display: flex;
  height: 7em;
  font-family: "arial";
`;

const HeaderButton = styled(Button)`
  && {
    color: white;
    border-color: transparent;
    width: 40%;
    background-color: transparent;
  }
`;

const HeaderIcon = styled(BackIcon)`
  && {
    color: white;
    margin-right: 25%;
    height: 100%;
    width: 50%;
  }
`;

const TapIcon = styled(FingerIcon)`
  && {
    color: black;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    height: 5em;
    width: 5em;
  }
`;

// TODO: factor divs out
const DisplayTicket = ({ ticketIDFromRoute, userIDfromRoute }) => {
  console.log('TicketID', ticketIDFromRoute.slice(0, 4));
  console.log('EventID', ticketIDFromRoute.slice(4));
  const [displayQR, setDisplayQR] = useState(false);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return 0;
    }
    // Render a countdown
    return <span>{seconds}</span>;
  };
  // timeout set to 5s for developing purposes --> should be 120s
  function generateQR() {
    setDisplayQR(true);
    setTimeout(() => {
      setDisplayQR(false);
    }, 5000);
  }

  // get the index of the event with the last 7 digits od the route
  const getEventIndexFromRoute = () => {
    let eventIndex;
    for (let i = 0; i < eventList.events.length; i += 1) {
      if (eventList.events[i].event_ID === ticketIDFromRoute.slice(4)) {
        eventIndex = i;
      }
    }
    return eventIndex;
  };

  const getTicketIDFromRoute = () => {
    let ticketID;
    for (let i = 0; i < ticketList.tickets.length; i += 1) {
      if (ticketList.tickets[i].TicketID === ticketIDFromRoute.slice(0, 4)) {
        ticketID = i;
      }
    }
    return ticketID;
  };

  return (
    <div>
      <StyledHeader>
        <HeaderButton>
          <Link href={`/wallet?user=${userIDfromRoute}`}>
            <HeaderIcon />
          </Link>
        </HeaderButton>
      </StyledHeader>
      <TopPaper>
        {displayQR && (
          <>
            <QRCode value={ticketList.tickets[0].TicketID} />
            <CounterContainer>
              QR Code valid for
              {' '}
              <Countdown
                date={Date.now() + 5000}
                renderer={renderer}
              />
            </CounterContainer>
          </>
        )}
        {!displayQR && (
          <>
            <Button onClick={() => generateQR()}>
              <div>
                <TapIcon />
                <CounterContainer>
                  Tap to reveal QR Code
                </CounterContainer>
              </div>
            </Button>
          </>
        )}
      </TopPaper>

      <MiddlePaper>
        <MiddleContainer>
          <div>
            <HeaderCell>Event</HeaderCell>
            <ContentCell>{eventList.events[getEventIndexFromRoute()].event_name}</ContentCell>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div>
              <HeaderCell>Date</HeaderCell>
              <ContentCellSmall>{eventList.events[getEventIndexFromRoute()].event_details.date}</ContentCellSmall>
            </div>
            <div style={{ marginLeft: '5%' }}>
              <HeaderCell>Price</HeaderCell>
              <ContentCellSmall>{`${ticketList.tickets[getTicketIDFromRoute()].Price} €`}</ContentCellSmall>
            </div>
          </div>
          <div>
            <HeaderCell>Location</HeaderCell>
            <ContentCellSmall>{`${eventList.events[getEventIndexFromRoute()].event_details.location_name}, ${eventList.events[0].event_details.city}` }</ContentCellSmall>
          </div>
        </MiddleContainer>
      </MiddlePaper>

      {/* {tickets[id].block && (
        <BottomPaper>
          <div style={{ width: '25%' }}>
            <HeaderCell>Block</HeaderCell>
            <ContentCell>{tickets[id].block}</ContentCell>
          </div>
          <div style={{ width: '25%' }}>
            <HeaderCell>Row</HeaderCell>
            <ContentCell>{tickets[id].row}</ContentCell>
          </div>
          <div style={{ width: '25%' }}>
            <HeaderCell>Seat</HeaderCell>
            <ContentCell>{tickets[id].seat}</ContentCell>
          </div>
        </BottomPaper>
      )} */}
    </div>
  );
};

DisplayTicket.propTypes = {
  id: PropTypes.string,
};

DisplayTicket.defaultProps = {
  id: PropTypes.objectOf(PropTypes.string),
};

export default DisplayTicket;
