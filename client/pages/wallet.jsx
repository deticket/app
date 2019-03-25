import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import PropTypes from "prop-types";

import { tickets } from "../Data";
import SideNav from "../components/layout";


const StyledCell = styled.div`
    font-size: 2em;
    text-align: center;
    color: white;
    height: 6em;
    background: transparent
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 4px solid white;
    border-radius: 10px;
    display: flex;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
`;

const GridContainer = styled.div`
  margin: auto;
`;

const Heading1 = styled.h1`
  height: 3em;
  font-size: 5em;
  font-weight: lighter;
`;

function getData(i) {
  const id = i;
  const ticketName = tickets[i].eventName;
  console.log(tickets[i]);
  console.log(tickets[i].eventName);
  const { date } = tickets[i];
  const ticketPrice = tickets[i].price;

  return {
    id,
    ticketName,
    date,
    ticketPrice
  };
}

const TopCell = ({ index, style }) => (
  <div style={style}>
    <Link href={`/ticket?id=${index}`}>
      <StyledCell>
        <TopRow>
          <div>{tickets[index].eventName}</div>
          <div>{tickets[index].price.toFixed(2)}€</div>
        </TopRow>
        <BottomRow>{tickets[index].date}</BottomRow>
      </StyledCell>
    </Link>
  </div>
);

// TODO: change fonts, put table logic in another component
function wallet() {
  const rows = [];
  for (let i = 0; i < tickets.length; i += 1) {
    rows[i] = getData(i);
  }

  return (
    <>
      <SideNav />
      <Heading1>Ticket Wallet Overview</Heading1>
      <GridContainer>
        <List
          itemCount={tickets.length}
          itemSize={350}
          height={tickets.length * 350}
          width={800}
          style={{ margin: "0 auto 0 auto" }}
        >
          {TopCell}
        </List>
      </GridContainer>
    </>
  );
}

TopCell.propTypes = {
  index: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.any)
};

TopCell.defaultProps = {
  index: 1,
  style: PropTypes.object
};

export default wallet;
