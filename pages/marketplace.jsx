import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import SideNav from '../components/layout';
import Dialog from '../components/purchaseDialog';

import eventList from '../Data/eventList.json';


const StyledCell = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    height: 8em;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid white;
    border-radius: 5px;
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
`;

const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  margin-right: 5%;
`;

const GridContainer = styled.div`
  margin: auto;
`;

const TestButton = styled(Button)`
  && {
    height: 2.2em;
    width: 100%;
    font-size: 1em;
    color: white;
    background: blue;
  }
`;

const Heading1 = styled.h1`
  height: 3em;
  font-size: 3em;
`;

// TODO: once there is a variable "ticketSaleOnogoing", query based on that
// get List of all active Events where tickets are available
function getActiveEvents() {
  const activeEvents = [];
  for (let i = 0; i < eventList.events.length; i += 1) {
    if (eventList.events[i].ticket_data.total_tickets - eventList.events[i].ticket_data.tickets_sold > 0) {
      activeEvents.push(eventList.events[i]);
    }
  }
  return activeEvents;
}

function marketplace({ query }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeEvents, setActiveEvents] = useState([]);
  const [eventData, setEventData] = useState([]);

  // queries the active events on first render
  useEffect(() => {
    setActiveEvents(getActiveEvents());
  }, []);


  function handleClick(index) {
    setEventData(activeEvents[index]);
    setIsDialogOpen(true);
  }

  const TopCell = ({ index, style }) => (
    <div style={style}>
      <StyledCell>
        <TopPart>
          <div>{activeEvents[index].event_name}</div>
          <div>{activeEvents[index].event_details.date}</div>
          <div>{activeEvents[index].event_details.location_name}</div>
        </TopPart>
        <TestButton onClick={() => handleClick(index)}>
          {`Get Tickets (${activeEvents[index].ticket_data.total_tickets
            - activeEvents[index].ticket_data.tickets_sold} left)`}
        </TestButton>
      </StyledCell>
    </div>
  );

  return (
    <>
      <SideNav userID={query.user} />
      <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} eventData={eventData} />
      <Heading1>Ticket Marketplace</Heading1>
      <GridContainer>
        <List
          itemCount={activeEvents.length}
          itemSize={150}
          height={activeEvents.length * 150}
          width={350}
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
      </GridContainer>
    </>
  );
}

marketplace.propTypes = {
  query: PropTypes.objectOf(PropTypes.object),
};

marketplace.defaultProps = {
  query: PropTypes.object,
};

export default marketplace;

marketplace.getInitialProps = ({ query }) => ({ query });
