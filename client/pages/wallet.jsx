import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';

import eventList from '../Data/eventList.json';
import ticketList from '../Data/ticketList.json';

import { TopRow, BottomRow, StyledCell, ColoredCell, GridContainer, SubHeading, Heading1 } from '../components/styles/wallet-styles'


// function getTickets to get all the tickets from the user
// TODO: fetch data from route once we have a backend
function getTickets(userIDfromRoute) {
  const userTickets = [];
  for (let i = 0; i < ticketList.tickets.length; i += 1) {
    if (ticketList.tickets[i].OwnerName === userIDfromRoute) {
      userTickets.push(ticketList.tickets[i]);
    }
  }
  return userTickets;
}

// function getEvents to get all the events of the tickets from the user
// TODO: fetch data from route once we have a backend
function getEvents(userIDfromRoute) {
  const userEvents = [];
  const userTickets = getTickets(userIDfromRoute);
  for (let i = 0; i < userTickets.length; i += 1) {
    for (let j = 0; j < eventList.events.length; j += 1) {
      if (eventList.events[j].event_ID === userTickets[i].ParentReference) {
        userEvents.push(eventList.events[j]);
      }
    }
  }
  return userEvents;
}

function wallet({ query }) {
  const [userTickets, setUserTickets] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  // takes 'user' paramter from route and queries the tickets for that user on first render
  useEffect(() => {
    setUserTickets(getTickets(query.user));
    setUserEvents(getEvents(query.user));
    console.log('tix:', userTickets);
    console.log('evt:', userEvents);
  }, []);

  const TopCell = ({ index, style }) => {
    console.log('index: ', index);
    return (
      <div style={style}>
        <Link href={`/ticket?user=${query.user}&ticketID=${userTickets[index].TicketID}${userEvents[index].event_ID}`}>
          <div>
            <StyledCell>
              <TopRow>
                <div>{userEvents[index].event_name}</div>
                <div>
                  {`${userTickets[index].InitialPrice} €`}
                  {/* .toFixed(2)} */}
                </div>
              </TopRow>
              <BottomRow>{userEvents[index].event_details.date}</BottomRow>
            </StyledCell>
            <ColoredCell>
              {userEvents[index].event_name}
            </ColoredCell>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <>
      {/* <SideNav userID={query.user} /> */}
      <Heading1>My Tickets</Heading1>
      <SubHeading>
        {userTickets.length}
        {' '}
        Ticket(s) available
      </SubHeading>
      <GridContainer>
        <List
          itemCount={userTickets.length}
          itemSize={170}
          height={userTickets.length * 170}
          width="85%"
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
        <Link href="/marketplace">
          <StyledCell style={{
            width: '85%', borderColor: 'white', borderStyle: 'dashed', borderWidth: '2px', background: 'transparent', margin: 'auto', height: '9em', marginBottom: '3%',
          }}
          >
            <div style={{ color: 'white' }}>
              Browse Marketplace for more Tickets
            </div>
          </StyledCell>
        </Link>
      </GridContainer>
      <BottomNav initialRoute={"wallet"} userID={query.user} />
    </>
  );
}
wallet.propTypes = {
  query: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.any),
};

wallet.defaultProps = {
  query: PropTypes.object,
  index: 1,
  style: PropTypes.object,
};

export default wallet;

wallet.getInitialProps = ({ query }) => ({ query });
