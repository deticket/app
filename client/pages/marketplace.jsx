import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { events } from '../components/Data';
import SideNav from '../components/SideNav';
import Dialog from '../components/purchaseDialog';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        font-family: 'Roboto', sans-serif;
        margin: unset;
    }
`;

const StyledCell = styled.div`
    font-size: 2em;
    text-align: center;
    color: white;
    height: 8em;
    background: transparent
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 4px solid white;
    border-radius: 10px;
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
    height: 2em;
    width: 100%;
    font-size: 1em;
    color: black;
    background: white;
    }
`;

// const StyledTextField = styled(TextField)`
//     && {
//     color: white;
//     border-color: white;
//     width: 40%;
//     background-color: transparent;
//     }
// `;

const Background = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
`;

const Heading1 = styled.h1`
    height: 3em;
    font-size: 5em;
`;

function createData(i) {
  const id = i;
  const ticketName = events[i].eventName;
  console.log(events[i]);
  console.log(events[i].eventName);
  const { date } = events[i];
  const ticketPrice = events[i].price;

  return {
    id, ticketName, date, ticketPrice,
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
          <div>{events[index].location}</div>
        </TopPart>
        <TestButton onClick={() => setIsDialogOpen(true)}>
          {`Buy Tickets (${events[index].totalTickets - events[index].ticketsSold} left)`}
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

  const rows = [
  ];

  for (let i = 0; i < events.length; i += 1) {
    rows[i] = createData(i);
  }

  return (
    <Background>
      <GlobalStyles />
      <SideNav />
      <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} />
      <Heading1>Ticket Marketplace</Heading1>
      {/* <StyledTextField
        id="outlined-search"
        label="Search field"
        type="search"
        // className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      <GridContainer>
        <List
          itemCount={events.length}
          itemSize={450}
          height={events.length * 450}
          width={800}
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
      </GridContainer>
    </Background>
  );
}

export default marketplace;
