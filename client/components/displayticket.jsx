import React from 'react';
import BackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import Background from '../components/Background.jsx';

import QRCode from 'qrcode.react';
import { tickets } from '../Data';


const StyledCell = styled.div`
  font-size: 1em;
  color: beige;
  width: 9em;
  background: #3b3bff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3em;
  padding-left: 1em;
  padding-right: 1em;
`;

const GridContainer = styled.div`
  margin: auto;
`;

const StyledHeader = styled.header`
  justify-content: flex-start;
  margin: auto;
  display: flex;
  height: 8em;
  font-family: "arial";
`;

const HeaderButton = styled(Button)`
  && {
    color: white;
    border-color: transparent;
    width: 40%;
    background-color: transparent;
  }
`;

const HeaderIcon = styled(BackIcon)`
  && {
    color: white;
    margin-right: 25%;
    height: 100%;
    width: 50%;
  }
`;

// TODO: factor divs out
const DisplayTicket = ({ id }) => (
  <div>
    <StyledHeader>
      <HeaderButton>
        <Link href="/wallet">
          <HeaderIcon />
        </Link>
      </HeaderButton>
    </StyledHeader>
    <QRCode
      value={tickets[id].eventName}
      size="15em"
      bgColor="#ffffff"
      fgColor="#000000"
      level="L"
      includeMargin={false}
      renderAs="svg"
    />

    <GridContainer>
      <Paper
        style={{
          margin: '5em auto 0 auto',
          color: 'black',
          background: 'transparent',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <StyledCell>Event Name:</StyledCell>
            <StyledCell>Date:</StyledCell>
            <StyledCell>Price:</StyledCell>
          </div>
          <div style={{ textAlign: 'right' }}>
            <StyledCell>{tickets[id].eventName}</StyledCell>
            <StyledCell>{tickets[id].date}</StyledCell>
            <StyledCell>{`${tickets[id].price.toFixed(2)} €`}</StyledCell>
          </div>
        </div>
      </Paper>
    </GridContainer>
    {tickets[id].block && (
      <GridContainer>
        <Paper
          style={{
            margin: '2em auto 0 auto',
            color: 'black',
            background: 'transparent',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <StyledCell>Block:</StyledCell>
              <StyledCell>Row:</StyledCell>
              <StyledCell>Seat:</StyledCell>
            </div>
            <div style={{ textAlign: 'right' }}>
              <StyledCell>{tickets[id].block}</StyledCell>
              <StyledCell>{tickets[id].row}</StyledCell>
              <StyledCell>{tickets[id].seat}</StyledCell>
            </div>
          </div>
        </Paper>
      </GridContainer>
    )}
  </div>
);

DisplayTicket.propTypes = {
  id: PropTypes.string,
};

DisplayTicket.defaultProps = {
  id: PropTypes.objectOf(PropTypes.string),
};

export default DisplayTicket;
