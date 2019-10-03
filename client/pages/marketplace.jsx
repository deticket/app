import React, { useState } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/layout/BottomNav';
import Dialog from '../components/purchaseDialog';
import LocationSelect from '../components/locationSelect';

import { TopRow, TopPart, BottomPart, BottomLeft, BottomRight, DateCell, Contents, BottomRow, TestButton, GridContainer, Heading1, FilterContainer, SearchButtonLong, SearchButton, ButtonContainer } from '../components/styles/marketplace-styles'

const query = gql`
	query EVENTS($type: String!, $typeFilter: Boolean!, $location: String!, $locationFilter: Boolean!){
      events(where: {
        _and: [ {
          _or: [
            {event_name: {_is_null: $typeFilter}}, 
            {event_name: {_eq: "123"}}   
          ] }, {
          _or:  [
            {event_details: {
        			city: {_is_null: $locationFilter}}},
            {event_details: {
        			city: {_eq: $location}}},
          ] }
        ]
      }
      ){
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

function marketplace({ }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [type, setType] = useState("");
  const [typeFilter, setTypeFilter] = useState(false);

  const [location, setLocation] = useState("LOCATION");
  const [locationFilter, setLocationFilter] = useState(false);

  function handleClick(index) {
    setIsDialogOpen(true);
  }

  function resetFilters() {
    console.log("reset filters");
    setTypeFilter(false);
    setLocationFilter(false);
  }

  // console.log("q ", query.user);
  return (
    <>
      <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} />
      <Heading1>Ticket Marketplace</Heading1>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* <TypeSelect type={type} setType={setType} setTypeFilter={setTypeFilter} /> */}
        <SearchButton onClick={() => resetFilters()}>Reset</SearchButton>
        <LocationSelect location={location} setLocation={setLocation} setLocationFilter={setLocationFilter} />
      </div>
      <Query    // <- Wrapping the main component with Query component from react-apollo
        query={query}
        fetchPolicy={'cache-and-network'}
        variables={{ type, typeFilter, location, locationFilter }}
      >
        {({ loading, data: { events: eventData } }) => {
          if (loading) return "Loading...";
          //if (error) return "Error...";
          // TODO: add loading screen
          // TODO: add fetch error screen

          // setValues({
          //   ...form,
          //   events: eventData,
          // });

          console.log("q: ", eventData);

          const TopCell = ({ index, style }) => {

            return (
              <div style={style}>
                <DateCell>
                  {`${(new Date(Date.parse(eventData[index].event_details.date))).toString().split(' ')[0]}, ${(new Date(Date.parse(eventData[index].event_details.date))).getDate()}.${(new Date(Date.parse(eventData[index].event_details.date))).getMonth() + 1}`}
                </DateCell>

                <TestButton onClick={() => handleClick(index)}>

                  <Contents>
                    <TopPart>
                      <TopRow>
                        {eventData[index].event_name}
                        {/* <div>{activeEvents[index].event_details.date}</div> */}
                      </TopRow>
                      <BottomRow>
                        {eventData[index].event_owner}
                      </BottomRow>
                    </TopPart>

                    <BottomPart>
                      <BottomLeft>
                        <div>{eventData[index].event_details.location_name}</div>
                      </BottomLeft>
                      <BottomRight>
                        Time
                    </BottomRight>
                    </BottomPart>
                    {/* <TestButton onClick={() => handleClick(index)}>
                  {`Get Tickets (${activeEvents[index].ticket_data.total_tickets
                    - activeEvents[index].ticket_data.tickets_sold} left)`}
                </TestButton> */}
                  </Contents>
                </TestButton>
              </div >
            )
          };

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
              <GridContainer>
                <List
                  itemCount={eventData.length}
                  itemSize={150}
                  height={eventData.length * 150}
                  width={"100%"}
                  style={{ margin: '0 auto 0 auto' }}
                >
                  {TopCell}
                </List>
              </GridContainer>
            </>
          );
        }}
      </Query>
      <BottomNav initialRoute={"marketplace"} userID={query.user} />
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

// marketplace.getInitialProps = ({ query }) => ({ query });
