import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
// import Background from '../components/Background.jsx';

// import { createGlobalStyle } from "styled-components";

import Ticket from '../components/displayticket';

const Background = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
`;

function DisplayTicket(props) {
  const { router } = props;
  return (
    <Background>
      <Ticket id={router.query.id} />
      {console.log(`id is: ${router.query.id}`)}
    </Background>
  );
}

DisplayTicket.propTypes = {
  router: PropTypes.string,
};

DisplayTicket.defaultProps = {
  router: PropTypes.string,
};

export default withRouter(DisplayTicket);
