import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

// import { createGlobalStyle } from "styled-components";

import DisplayTicket from '../components/displayticket';

function Ticket(props) {
  const { router } = props;
  return (
    <>
      <DisplayTicket ticketIDFromRoute={router.query.ticketID} userIDfromRoute={router.query.user} />
      {console.log(`id is: ${router.query.ticketID}`)}
    </>
  );
}

Ticket.propTypes = {
  router: PropTypes.objectOf(PropTypes.any),
};

Ticket.defaultProps = {
  router: PropTypes.object,
};

export default withRouter(Ticket);
