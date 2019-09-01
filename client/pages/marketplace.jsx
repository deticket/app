import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';


import React, { useState } from 'react';
import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import Dialog from '../components/purchaseDialog';


const StyledCell = styled.div`
    font-size: 1em;
    text-align: center;
    color: white;
    height: 8em;
    background: rgba(0, 0, 0, 0.3);
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
      </Query>
    </>
  );
}

export default withData(marketplace);

marketplace.getInitialProps = ({ query }) => ({ query });
