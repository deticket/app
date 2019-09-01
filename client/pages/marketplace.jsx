import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';


import React, { useState } from 'react';
import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';

import Dialog from '../components/purchaseDialog';

import eventList from '../Data/eventList.json';


const StyledCell = styled.div`
    font-size: 1em;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    display: flex;
    margin: auto;
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
`;

const DateCell = styled.div`
    font-size: 1em;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    margin-left: 7.5%;
    margin-bottom: 2%;
`;

const Contents = styled.div`
    flex-direction: column;
`;


const BottomRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  margin: auto;
  margin-top: 10%;
`;

const FilterContainer = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 10%;
  display: flex;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const TestButton = styled(Button)`
  && {
    font-size: 1em;
    text-transform: none;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    display: flex;
    margin: auto;
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const SearchButton = styled(Button)`
&& {
  height: 2.2em;
  width: 25%;
  font-size: 1em;
  color: black;
  background: rgba(999,999,999,0.8);
}
`;

const SearchButtonLong = styled(Button)`
&& {
  height: 2.2em;
  width: 40%;
  font-size: 1em;
  color: black;
  background: rgba(999,999,999,0.8);
}
`;

const Heading1 = styled.h1`
  font-size: 3em;
  font-weight: normal;
  margin: 0;
  padding-top: 2em;
`;

const query = gql`
	query {
	  events {
      event_name
      event_owner
      event_details {
        location_name
        city
        date
      }
      ticket_data {
        total_tickets
        tickets_sold
      }
    }
	}
`

console.log("q: ", query);

function marketplace({ }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick(index) {
    setEventData(activeEvents[index]);
    setIsDialogOpen(true);
  }
  // const TopCell = ({ index, style }) => (
  //   <div style={style}>
  //     <DateCell>
  //       {activeEvents[index].event_details.date}
  //     </DateCell>
  //     <TestButton onClick={() => handleClick(index)}>
  //       <Contents>
  //         <div>{activeEvents[index].event_name}</div>
  //         {/* <div>{activeEvents[index].event_details.date}</div> */}
  //         <BottomRow>
  //           <div>{activeEvents[index].event_details.location_name}</div>
  //           <div>Time</div>
  //         </BottomRow>
  //         {/* <TestButton onClick={() => handleClick(index)}>
  //         {`Get Tickets (${activeEvents[index].ticket_data.total_tickets
  //           - activeEvents[index].ticket_data.tickets_sold} left)`}
  //       </TestButton> */}
  //       </Contents>
  //     </TestButton>
  //   </div >
  // );

  console.log("q ", query.user);
  return (
    <>
      <Query    // <- Wrapping the main component with Query component from react-apollo
        query={query}
        fetchPolicy={'cache-and-network'}
      >
        {({ loading, data: { events: eventData } }) => {

          // TODO: add loading screen
          // TODO: add fetch error screen

          // setValues({
          //   ...form,
          //   events: eventData,
          // });

          console.log("q: ", eventData);
          const TopCell = ({ index, style }) => (
            <div style={style}>
              <StyledCell>
                <TopPart>
                  <div>{eventData[index].event_name}</div>
                  <div>{eventData[index].event_owner}</div>
                  <div>{eventData[index].event_details.date}</div>
                  <div>{eventData[index].event_details.location_name + ", " + eventData[index].event_details.city}</div>
                </TopPart>
              </StyledCell>
            </div>
          );

          // TopCell.propTypes = {
          //   index: PropTypes.string,
          //   style: PropTypes.objectOf(PropTypes.object),
          // };

          // TopCell.defaultProps = {
          //   index: PropTypes.string,
          //   style: PropTypes.object,
          // };
          return (
            <>
              <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} />
              <Heading1>Ticket Marketplace</Heading1>
              <FilterContainer>
                <ButtonContainer>
                  <SearchButton>Type</SearchButton>
                  <SearchButtonLong>Location</SearchButtonLong>
                  <SearchButton>Date</SearchButton>
                </ButtonContainer>
              </FilterContainer>
              <GridContainer>
                <List
                  itemCount={eventData.length}
                  itemSize={150}
                  height={eventData.length * 150}
                  width={350}
                  style={{ margin: '0 auto 0 auto' }}
                >
                  {TopCell}
                </List>
              </GridContainer>
            </>
          );
        }}
        <BottomNav initialRoute={"marketplace"} userID={query.user} />
      </Query>
      {/* <SideNav userID={query.user} /> */}

      {/* <GridContainer>
        <List
          itemCount={activeEvents.length}
          itemSize={150}
          height={activeEvents.length * 150}
          width={"100vw"}
          style={{ margin: '0 auto 0 auto' }}
        >
          {TopCell}
        </List>
      </GridContainer> */}
    </>
  );
}
marketplace.propTypes = {
  query: PropTypes.objectOf(PropTypes.object),
};

marketplace.defaultProps = {
  query: PropTypes.object,
};

export default withData(marketplace);

marketplace.getInitialProps = ({ query }) => ({ query });
