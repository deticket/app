export default function validatorFunction(values) {

  console.log("a", typeof (values.ticketnumber))

  const errors = {};

  // Validation for "Event Name" field
  if (!values.name) {
    errors.name = 'Required';
  }
  else if (
    values.name.length > 25
  ) {
    errors.name = 'Max 25 characters allowed';
  }

  // Validation for "Event Description" field
  if (!values.description) {
    errors.description = 'Required';
  }
  else if (
    values.description.length > 250
  ) {
    errors.description = 'Max 250 characters allowed';
  }

  // Validation for "Number of Tickets" field
  if (!values.ticketnumber) {
    errors.ticketnumber = 'Required';
  }
  else if (
    values.ticketnumber > 500
  ) {
    errors.ticketnumber = 'Max Number of Tickets is 500';
  }
  else if (
    values.ticketnumber < 1
  ) {
    errors.ticketnumber = 'Min Number of Tickets is 1';
  }
  //TODO: only Dates in the future allowed
  if (!values.datefield) {
    errors.datefield = 'Required';
  } else if (
    values.datefield.slice(length - 4) < 2020
  ) {
    errors.datefield = 'Please select a date in the future';
  }

  // TODO: only positive numbers allowed
  if (!values.timefield) {
    errors.timefield = 'Required';
  }
  if (!values.location) {
    errors.location = 'Required';
  }
  return errors;
}