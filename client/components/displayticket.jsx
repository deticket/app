import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

import QRCode from './QRCode';
import { HeaderCell, ContentCellSmall, BottomPaper, CounterContainer, MiddleContainer, TapIcon, HeaderIcon, HeaderButton, StyledHeader, ContentCell, TopPaper, MiddlePaper } from './displayticket-styles'

// TODO: factor divs out
const DisplayTicket = ({ ticketData }) => {
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

  return (
    <>
      <StyledHeader>
        <HeaderButton>
          <Link href={`/wallet?user=${ticketData[0].userID}`}>
            <HeaderIcon />
          </Link>
        </HeaderButton>
      </StyledHeader>
      <TopPaper>
        {displayQR && (
          <>
            <QRCode value={ticketData[0].ticketID} />
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
          <>
            <HeaderCell>Event</HeaderCell>
            <ContentCell>{ticketData[0].events.event_name}</ContentCell>
          </>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div>
              <HeaderCell>Date</HeaderCell>
              <ContentCellSmall>{ticketData[0].events.event_details.date}</ContentCellSmall>
            </div>
            <div style={{ marginLeft: '5%' }}>
              <HeaderCell>Price</HeaderCell>
              {/* TODO: change price to time variable */}
              {/* <ContentCellSmall>{`${ticketList.tickets[getTicketIDFromRoute()].Price} €`}</ContentCellSmall> */}
              <ContentCellSmall>free</ContentCellSmall>
            </div>
          </div>
          <>
            <HeaderCell>Location</HeaderCell>
            <ContentCellSmall>{`${ticketData[0].events.event_details.location_name}, ${ticketData[0].events.event_details.city}`}</ContentCellSmall>
          </>
        </MiddleContainer>
      </MiddlePaper>
    </>
  );
};

DisplayTicket.propTypes = {
  seconds: PropTypes.number,
  completed: PropTypes.bool,
};

DisplayTicket.defaultProps = {
  seconds: 0,
  completed: true,
};

export default DisplayTicket;
