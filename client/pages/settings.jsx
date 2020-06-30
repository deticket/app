import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';

import eventList from '../Data/eventList.json';
import ticketList from '../Data/ticketList.json';

import { TopRow, BottomRow, StyledCell, ColoredCell, GridContainer, SubHeading, Heading1 } from '../components/styles/wallet-styles'


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

function settings({ query }) {
  const [userTickets, setUserTickets] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  // takes 'user' paramter from route and queries the tickets for that user on first render


  return (
    <>
      {/* <SideNav userID={query.user} /> */}
      <Heading1>Settings Page under construction</Heading1>
      <BottomNav initialRoute={"settings"} userID={query.user} />
    </>
  );
}
settings.propTypes = {
  query: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.any),
};

settings.defaultProps = {
  query: PropTypes.object,
  index: 1,
  style: PropTypes.object,
};

export default settings;

settings.getInitialProps = ({ query }) => ({ query });
