import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import SideNav from '../components/layout';
import eventList from '../Data/eventList.json';
import ticketList from '../Data/ticketList.json';


const StyledCell = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 6px 6px 0px 0px;
    display: flex;
`;

const ColoredCell = styled.div`
    font-size: 1.25em;
    text-align: center;
    color: white;
    height: 2.5em;
    background: #16043E;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0px 0px 6px 6px;
    display: flex;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
`;

const GridContainer = styled.div`
  margin: auto;
`;

const Heading1 = styled.h1`
  height: 0.5em;
  font-size: 3em;
  font-weight: normal;
`;

const SubHeading = styled.h1`
  height: 1em;
  font-size: 1em;
  font-weight: lighter;
  margin-bottom: 20%;
`;

// function getTickets to get all the tickets from the user
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
// TODO?: add state variable (with usestate) for list of current tickets
function wallet({ query }) {
  // takes 'user' paramter from route and queries the tickets for that user
  const userTickets = getTickets(query.user);
  console.log('tix:', userTickets);
  const userEvents = getEvents(query.user);
  console.log('evt:', userEvents);


  const TopCell = ({ index, style }) => {
    console.log('index: ', index);
    return (
      <div style={style}>
        <Link href={`/ticket?user=${query.user}&ticketID=${userTickets[index].TicketID}${userEvents[index].event_ID}`}>
          <div>
            <StyledCell>
              <TopRow>
                <div>{userEvents[index].event_name }</div>
                <div>
                  {`${userTickets[index].InitialPrice} €` }
                  {/* .toFixed(2)} */}
                </div>
              </TopRow>
              <BottomRow>{userEvents[index].event_details.date}</BottomRow>
            </StyledCell>
            <ColoredCell>
              {userEvents[index].event_name }
            </ColoredCell>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <>
      <SideNav userID={query.user} />
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
            width: '85%', borderColor: 'white', borderStyle: 'dashed', borderWidth: '2px', background: 'transparent', margin: 'auto', height: '9em',
          }}
          >
            <div style={{ color: 'white' }}>
              Browse Marketplace for more Tickets
            </div>
          </StyledCell>
        </Link>
      </GridContainer>
    </>
  );
}
// TopCell.propTypes = {
//   index: PropTypes.number,
//   style: PropTypes.objectOf(PropTypes.any),
// };

// TopCell.defaultProps = {
//   index: 1,
//   style: PropTypes.object,
// };

export default wallet;

wallet.getInitialProps = ({ query }) => ({ query });
