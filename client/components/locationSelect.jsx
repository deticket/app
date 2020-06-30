import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { FixedSizeList as List } from 'react-window';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ArrowDown from '@material-ui/icons/KeyboardArrowDown';

import styled from 'styled-components';


import { TopContainer, MidContainer, BottomContainer, SelectorContainer, FlexContainer, MinusButton, MinusButtonDisabled, TicketNumber, CloseButton, PlusButton, PlusButtonDisabled, ListHeader, TopRow, BottomRow, StyledCell, CloseIcon, BuyButton, StyledDialogContent, StyledFormControl } from './purchaseDialog-styles'

const StyledSelect = styled(({ className, ...props }) => (
  <Select {...props} MenuProps={{ classes: { paper: className } }} />
))`
  box-shadow: none;
  color: red;
  li {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

function PurchaseDialog(props) {
  // numberOfTickets is the value of the Selector; default: 1
  // function to set isOpen to false and close the Dialog
  function handleClose() {
    props.setState(false);
  }

  function handleChange(event) {
    props.setLocation(event.target.value);
    event.target.value !== "LOCATION" && props.setLocationFilter(true);
    event.target.value === "LOCATION" && props.setLocationFilter(false);
  }

  // TODO: query number of available Tickets from Event to prevent selling more tickets than available
  return (
    <FormControl variant="outlined" style={{ background: 'rgba(999,999,999,0.8)', borderRadius: '3px', width: '11em', paddingRight: '2%', paddingLeft: '2%' }}>
      {/* <InputLabel ref={inputLabel} style={{ color: 'black' }} htmlFor="outlined-age-simple" >
                  Age
                </InputLabel> */}
      <StyledSelect
        value={props.location}
        onChange={handleChange}
        //labelWidth={props.labelWidth}
        IconComponent={ArrowDown}
        disableUnderline
        inputProps={{
          name: 'location',
          id: 'outlined-age-simple',
        }}
      >
        <MenuItem value="LOCATION">
          ALL LOCATIONS
                  </MenuItem>
        <MenuItem value="Berlin">BERLIN</MenuItem>
        <MenuItem value="HAMBURG">HAMBURG</MenuItem>
        <MenuItem value="LONDON">LONDON</MenuItem>
      </StyledSelect>
    </FormControl>
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
