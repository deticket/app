import React, { useState } from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';
import { withRouter } from 'next/router';

import DisplayTicket from '../components/displayticket';

const query = gql`
 	query EVENTS($eventID: Int!, $ticketID: Int!){
    tickets(where: {eventID: {_eq: $eventID}, ticketID: {_eq: $ticketID} }) {
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

function Ticket(props) {
  const { router } = props;
  const [ticketID, setTicketID] = useState(router.query.ticketID.slice(0, 4));
  const [eventID, setEventID] = useState(router.query.ticketID.slice(4));

  return (
    <>
      <Query
        query={query}
        fetchPolicy={'cache-and-network'}
        variables={{ ticketID, eventID }}
      >
        {({ loading, data: { tickets: ticketData } }) => {
          if (loading) return "Loading...";

          return (
            <>
              <DisplayTicket ticketData={ticketData} />
              {console.log(`id is: ${router.query.ticketID}`)}
            </>
          );
        }}
      </Query>
    </>
  );
}

Ticket.propTypes = {
  router: PropTypes.objectOf(PropTypes.any),
};

Ticket.defaultProps = {
  router: PropTypes.object,
};

export default withRouter(withData(Ticket));

Ticket.getInitialProps = ({ query }) => ({ query });