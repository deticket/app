import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import { FixedSizeList as List } from 'react-window';

import { TopContainer, MidContainer, BottomContainer, SelectorContainer, FlexContainer, MinusButton, MinusButtonDisabled, TicketNumber, CloseButton, PlusButton, PlusButtonDisabled, ListHeader, TopRow, BottomRow, StyledCell, CloseIcon, BuyButton, StyledDialogContent, StyledFormControl } from './purchaseDialog-styles'


function PurchaseDialog(props) {
  // numberOfTickets is the value of the Selector; default: 1
  const [numberOfTickets, setNumberofTickets] = useState(1);

  // function to set isOpen to false and close the Dialog
  function handleClose() {
    props.setState(false);
  }

  const { isOpen, eventData } = props;

  const Ticket = ({ index, style }) => (
    <div style={style}>

      <StyledCell>
        <TopRow>
          <div>
            {`Ticket #${index + 1}`}
          </div>
          <div>
            {parseFloat(eventData.ticket_data.ticket_price).toFixed(2)}
            {' '}
            €
          </div>
        </TopRow>
        <BottomRow>
          <FlexContainer>
            <div>
              {eventData.event_name}
            </div>
            <div>
              {eventData.event_details.date}
            </div>
          </FlexContainer>
          <div>
            {`${eventData.event_details.location_name}, ${eventData.event_details.city}`}
          </div>
        </BottomRow>
      </StyledCell>

    </div>
  );

  // TODO: query number of available Tickets from Event to prevent selling more tickets than available
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        repositiononupdate="false"
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="max-width-dialog-title"
      >
        <TopContainer>
          <CloseButton onClick={() => handleClose()} color="primary">
            <CloseIcon />
          </CloseButton>
        </TopContainer>
        <StyledDialogContent>
          <DialogContentText>
            Please select how many tickets you want to purchase
          </DialogContentText>

          <StyledFormControl>
            <SelectorContainer>
              {numberOfTickets > 1
                && (<MinusButton onClick={() => setNumberofTickets(numberOfTickets - 1)}> - </MinusButton>)
              }
              {numberOfTickets === 1
                && (<MinusButtonDisabled> - </MinusButtonDisabled>)
              }
              <TicketNumber>
                {numberOfTickets}
              </TicketNumber>
              {numberOfTickets < 3
                && (<PlusButton onClick={() => setNumberofTickets(numberOfTickets + 1)}> + </PlusButton>)
              }
              {numberOfTickets === 3
                && (<PlusButtonDisabled> + </PlusButtonDisabled>)
              }
            </SelectorContainer>
            <MidContainer>
              <ListHeader>
                Tickets
              </ListHeader>
              <List
                itemCount={numberOfTickets}
                itemSize={80}
                height={3 * 80}
                style={{ margin: '0 auto 0 auto' }}
              >
                {Ticket}
              </List>
            </MidContainer>
            <BottomContainer>
              <BuyButton color="primary">
                {/* TODO: Here we need to fire the transaction to buy tickets */}
                {isOpen && `Buy ${numberOfTickets} Ticket(s) for ${(eventData.ticket_data.ticket_price * numberOfTickets).toFixed(2)} €`}
              </BuyButton>
            </BottomContainer>
          </StyledFormControl>
        </StyledDialogContent>
      </Dialog>
    </React.Fragment>
  );
}

PurchaseDialog.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
  eventData: PropTypes.objectOf(PropTypes.any),
};

PurchaseDialog.defaultProps = {
  isOpen: 'false',
  setState: () => { },
  eventData: PropTypes.object,
};

export default PurchaseDialog;
