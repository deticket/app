import React from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { FixedSizeList as List } from 'react-window';

import { tickets } from '../components/Data';
import SideNav from '../components/SideNav';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        font-family: 'Roboto', sans-serif;
    }
`;

const StyledCell = styled.div`
    font-size: 2em;
    text-align: center;
    color: white;
    width: 100vw;
    height: 4em;
    background: transparent
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 10px solid white;
`;

const GridContainer = styled.div`
    margin: auto;
`;

const Background = styled.div`
    font-size: 1.5em;    
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
`;

const Heading1 = styled.h1`
    height: 5em;
    font-size: 5em;
    font-weight: lighter;
`;

function createData(i) {
  const id = i;
  const ticketName = tickets[i].eventName;
  console.log(tickets[i]);
  console.log(tickets[i].eventName);
  // eslint-disable-next-line prefer-destructuring
  const date = tickets[i].date;
  const ticketPrice = tickets[i].price;

  return {
    id, ticketName, date, ticketPrice,
  };
}

// eslint-disable-next-line react/prop-types
const TopCell = ({ index, style }) => (
  <div style={style}>
    <div style={{ display: 'flex' }}>
      <Link href={`/ticket?id=${index}`}>
        {/* // {{ pathname: 'ticket', query: { id: index}}}> */}
        <StyledCell>
          <div style={{
            display: 'flex', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%',
          }}
          >
            <div>{tickets[index].eventName}</div>
            <div>
              {tickets[index].price.toFixed(2)}
              €
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '5%' }}>
            {tickets[index].date}
          </div>
        </StyledCell>
      </Link>
    </div>
  </div>
);

// TODO: change fonts, put table logic in another component
function wallet() {
  const rows = [];
  for (let i = 0; i < tickets.length; i += 1) {
    rows[i] = createData(i);
  }

  return (
    <Background>
      <GlobalStyles />
      <SideNav />
      <Heading1>Ticket Wallet Overview</Heading1>
      <GridContainer>
        <List
          itemCount={tickets.length}
          itemSize={250}
          height={tickets.length * 250}
          width={800}
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
      </GridContainer>
    </Background>
  );
}

export default wallet;
