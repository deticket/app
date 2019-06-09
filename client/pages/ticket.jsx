import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

// import { createGlobalStyle } from "styled-components";

import Ticket from '../components/displayticket';

function DisplayTicket(props) {
  const { router } = props;
  return (
    <>
      <Ticket ticketIDFromRoute={router.query.ticketID} userIDfromRoute={router.query.user} />
      {console.log(`id is: ${router.query.ticketID}`)}
    </>
  );
}

DisplayTicket.propTypes = {
  router: PropTypes.objectOf(PropTypes.any),
};

DisplayTicket.defaultProps = {
  router: PropTypes.object,
};

export default withRouter(DisplayTicket);
