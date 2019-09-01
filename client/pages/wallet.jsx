import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';

import eventList from '../Data/eventList.json';
import ticketList from '../Data/ticketList.json';

import { TopRow, BottomRow, StyledCell, ColoredCell, GridContainer, SubHeading, Heading1 } from '../components/styles/wallet-styles'



const query = gql`
 	query {
    tickets(where: {userID: {_eq: 1111}}) {
      ticketID
      userID
      events {
        event_name
        event_details {
          location_name
          date
          city
        }
      }
    }
  }
`

function wallet() {
  const [userTickets, setUserTickets] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  // takes 'user' paramter from route and queries the tickets for that user on first render
  useEffect(() => {
    // setUserTickets(getTickets(query.user));
    // setUserEvents(getEvents(query.user));
    console.log('tix:', userTickets);
    console.log('evt:', userEvents);
  }, []);

  return (
    <>
      <Query    // <- Wrapping the main component with Query component from react-apollo
        query={query}
        fetchPolicy={'cache-and-network'}
      >
        {({ loading, data: { tickets: ticketData } }) => {

          console.log(ticketData);
          const TopCell = ({ index, style }) => {
            console.log('here: ', index);
            return (
              <div style={style}>
                {/* <Link href={`/ticket?user=${query.user}&ticketID=${userTickets[index].TicketID}${userEvents[index].event_ID}`}> */}
                <div>
                  <StyledCell>
                    <TopRow>
                      <div>{ticketData[index].events.event_name}</div>
                      <div>{ticketData[index].events.event_details.date}</div>
                    </TopRow>
                    <BottomRow>{ticketData[index].events.event_details.city}</BottomRow>
                  </StyledCell>
                  <ColoredCell>
                    {ticketData[index].events.event_name}
                  </ColoredCell>
                </div>
                {/* </Link> */}
              </div>
            );
          };


          return (
            <>
              <Heading1>My Tickets</Heading1>
              <SubHeading>
                {ticketData.length}
                {' '}
                Ticket(s) available
              </SubHeading>
              <GridContainer>
                <List
                  itemCount={ticketData.length}
                  itemSize={170}
                  height={ticketData.length * 170}
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
        }}
      </Query>
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

export default withData(wallet);

wallet.getInitialProps = ({ query }) => ({ query });
