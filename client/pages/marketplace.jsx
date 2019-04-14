import React, { useState } from 'react';
import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { events } from '../Data';
import SideNav from '../components/layout';
import Dialog from '../components/purchaseDialog';


const StyledCell = styled.div`
    font-size: 1em;
    text-align: center;
    color: white;
    height: 8em;
    background: transparent
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
    color: black;
    background: white;
  }
`;

const Heading1 = styled.h1`
  height: 3em;
  font-size: 3em;
`;

function createData(i) {
  const id = i;
  const ticketName = events[i].eventName;
  console.log(events[i]);
  console.log(events[i].eventName);
  const { date } = events[i];
  const ticketPrice = events[i].price;

  return {
    id,
    ticketName,
    date,
    ticketPrice,
  };
}
function marketplace() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const TopCell = ({ index, style }) => (
    <div style={style}>
      <StyledCell>
        <TopPart>
          <div>{events[index].eventName}</div>
          <div>{events[index].date}</div>
          <div>{events[index].eventDetails.location}</div>
        </TopPart>
        <TestButton onClick={() => setIsDialogOpen(true)}>
          {`Buy Tickets (${events[index].ticketData.totalTickets
            - events[index].ticketData.ticketsSold} left)`}
        </TestButton>
      </StyledCell>
    </div>
  );

  TopCell.propTypes = {
    index: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.object),
  };

  TopCell.defaultProps = {
    index: PropTypes.string,
    style: PropTypes.object,
  };

  const rows = [];

  for (let i = 0; i < events.length; i += 1) {
    rows[i] = createData(i);
  }

  return (
    <>
      <SideNav />
      <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} />
      <Heading1>Ticket Marketplace</Heading1>
      <GridContainer>
        <List
          itemCount={events.length}
          itemSize={150}
          height={events.length * 150}
          width={350}
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
      </GridContainer>
    </>
  );
}

export default marketplace;
