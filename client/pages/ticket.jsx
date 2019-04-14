import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

// import { createGlobalStyle } from "styled-components";

import Ticket from '../components/displayticket';

function DisplayTicket(props) {
  const { router } = props;
  return (
    <>
      <Ticket id={router.query.id} />
      {console.log(`id is: ${router.query.id}`)}
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
