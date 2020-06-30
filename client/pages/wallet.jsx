import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';

import { TopRow, BottomRow, StyledCell, ColoredCell, GridContainer, SubHeading, Heading1 } from '../components/styles/wallet-styles'

const query = gql`
 	query EVENTS($user: Int!){
    tickets(where: {userID: {_eq: $user}}) {
      ticketID
      userID
      events {
        event_name
        event_ID
        event_details {
          location_name
          date
          city
        }
      }
    }
  }
`

function wallet(props) {
  const { router } = props;

  const [user, setUser] = useState(router.query.user);

  return (
    <>
      <Query
        query={query}
        fetchPolicy={'cache-and-network'}
        variables={{ user }}
      >
        {({ loading, data: { tickets: ticketData } }) => {
          if (loading) return "Loading...";

          const TopCell = ({ index, style }) => {
            console.log(ticketData);
            return (
              <div style={style}>
                <Link href={`/ticket?user=${ticketData[index].userID}&ticketID=${ticketData[index].ticketID}${ticketData[index].events.event_ID}`}>
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
                </Link>
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
                <Link href={`/marketplace?user=${router.query.user}`}>
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
              <BottomNav initialRoute={"wallet"} userID={router.query.user} />
            </>
          );
        }}
      </Query>
    </>
  );
}

// wallet.propTypes = {
//   query: PropTypes.objectOf(PropTypes.any),
//   index: PropTypes.number,
//   style: PropTypes.objectOf(PropTypes.any),
// };

// wallet.defaultProps = {
//   query: PropTypes.object,
//   index: 1,
//   style: PropTypes.object,
// };

export default withRouter(withData(wallet));

wallet.getInitialProps = ({ query }) => ({ query });
