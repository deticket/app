import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

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
// TopCell.propTypes = {
//   index: PropTypes.number,
//   style: PropTypes.objectOf(PropTypes.any),
// };

// TopCell.defaultProps = {
//   index: 1,
//   style: PropTypes.object,
// };

export default withData(wallet);

wallet.getInitialProps = ({ query }) => ({ query });
