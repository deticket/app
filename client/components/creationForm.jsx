import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import CalendarIcon from '@material-ui/icons/Today';
import PhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import TopSelectionButtons from './topSelectionButtons.jsx';

import DatePicker from 'react-mobile-datepicker';

import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

import { ButtonContainer, UploadButton, StyledButton, SubmitButton, styles } from './eventcreation-styles';

import validatorFunction from './validation';

import { dateConfig, timeConfig } from './dateConfig';

function App(props) {
  const { classes, children, className, ...other } = props;

  const [datePickerOpen, setDatePickerOpen] = React.useState(false);
  const [timePickerOpen, setTimePickerOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [dateField, setDateField] = React.useState('');
  const [timeField, setTimeField] = React.useState('');
  const [meetupSelected, setMeetupSelected] = React.useState(true);
  const [concertSelected, setConcertSelected] = React.useState(false);
  const [conferenceSelected, setConferenceSelected] = React.useState(false);

  function getWeekDay(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }

  function getMonthName(date) {
    let days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return days[date.getMonth()];
  }

  const handleSelectDate = (time) => {
    setDateField(`${getWeekDay(time)} ${time.getDate()}. ${getMonthName(time)} ${time.getFullYear()}`);
    setDate(time);
    setDatePickerOpen(false);
  }

  const handleSelectTime = (time) => {
    const hours = ("0" + time.getHours()).slice(-2);
    const minutes = ("0" + time.getMinutes()).slice(-2);
    setTimeField(`${hours}:${minutes}`);
    setTime(time);
    setTimePickerOpen(false);
  }

  const handleChangeDate = (time) => {
    setDateField(`${getWeekDay(time)} ${time.getDate()}. ${getMonthName(time)} ${time.getFullYear()}`);
    setDate(time);
  }

  const handleChangeTime = (time) => {
    const hours = ("0" + time.getHours()).slice(-2);
    const minutes = ("0" + time.getMinutes()).slice(-2);
    setTimeField(`${hours}:${minutes}`);
    setDate(time);
  }

  const handleCancel = () => {
    setDatePickerOpen(false);
    setTimePickerOpen(false);
  };

  const handleClickDateOpen = () => {
    setDatePickerOpen(true);
  }

  const handleClickTimeOpen = () => {
    setTimePickerOpen(true);
  }


  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        description: '',
        ticketnumber: '',
        datefield: dateField,
        timefield: timeField,
        location: '',
      }}
      validate={values => validatorFunction(values)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}>
      {({ submitForm, isSubmitting, values, setFieldValue }) => (
        <Form>
          <TopSelectionButtons meetupSelected={meetupSelected} concertSelected={concertSelected} conferenceSelected={conferenceSelected} setMeetupSelected={setMeetupSelected} setConcertSelected={setConcertSelected} setConferenceSelected={setConferenceSelected} />
          <Field
            name="name"
            type="text"
            component={TextField}
            InputProps={{
              className: classes.inputEventName,
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
              }
            }}
            id="outlined-basic"
            placeholder="Event Name"
            variant="outlined"
            style={{ marginBottom: "1em", width: "100%" }}
          />
          <br />
          <Field
            type="text"
            name="description"
            component={TextField}
            InputProps={{
              className: classes.inputEventDescription,
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
              }
            }}
            id="outlined-basic"
            placeholder="Event Description (max. 50 words)"
            variant="outlined"
            style={{ marginBottom: "1em", width: "100%" }}
          />
          <br />
          {/* <div>
            <StyledButton >
              <PhotoIcon />
              Upload Image
            </StyledButton>
          </div> */}
          <Field
            type="number"
            // label="Password"
            name="ticketnumber"
            component={TextField}
            InputProps={{
              className: classes.inputNumberOfTickets,
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
              }
            }}
            id="outlined-basic"
            placeholder="Number of Tickets"
            variant="outlined"
            style={{ marginBottom: "1em", width: "45%" }}
          />
          <br />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Button onClick={handleClickDateOpen} style={{ padding: '0' }}>

              <Field
                type="text"
                // label="Password"
                name="datefield"
                component={TextField}
                InputProps={{
                  className: classes.inputStartDate,
                  classes: {
                    notchedOutline: classes.notchedOutline,
                    focused: classes.focused,
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarIcon style={{ color: "#1E90FF" }} />
                    </InputAdornment>
                  ),
                }}
                id="outlined-basic"
                value={dateField}
                placeholder="Event Date"
                variant="outlined"
                style={{ marginBottom: "1em", textTransform: "none" }}
              />
            </Button>

            <Button onClick={handleClickTimeOpen} style={{ padding: '0', width: "35%" }}>

              <Field
                type="text"
                // label="Password"
                name="timefield"
                component={TextField}
                InputProps={{
                  className: classes.inputStartTime,
                  classes: {
                    notchedOutline: classes.notchedOutline,
                    focused: classes.focused,
                  },
                }}
                id="outlined-basic"
                placeholder="Time"
                variant="outlined"
                style={{ marginBottom: "1em", textTransform: "none" }}
              />
            </Button>

          </div>

          <br />

          <Field
            type="text"
            name="location"
            component={TextField}
            InputProps={{
              className: classes.inputEventLocation,
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
              },
            }}
            id="outlined-basic"
            placeholder="Location"
            variant="outlined"
            style={{ marginBottom: "1em", width: "100%" }}
          />

          {isSubmitting && <LinearProgress />}
          <br />

          <ButtonContainer>
            <SubmitButton
              variant="contained"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Create Event
            </SubmitButton>
          </ButtonContainer>

          <DatePicker
            value={date}
            isOpen={datePickerOpen}
            dateConfig={dateConfig}
            theme={"ios"}
            confirmText={"confirm"}
            cancelText={"cancel"}
            showHeader={false}
            style={{ color: 'white' }}
            onSelect={handleSelectDate}
            onCancel={handleCancel}
            onChange={handleChangeDate}
          />
          <DatePicker
            value={time}
            isOpen={timePickerOpen}
            dateConfig={timeConfig}
            theme={"ios"}
            confirmText={"confirm"}
            cancelText={"cancel"}
            showHeader={false}
            style={{ color: 'white' }}
            onSelect={handleSelectTime}
            onCancel={handleCancel}
            onChange={handleChangeTime}
          />
        </Form>
      )}
    </Formik>
  )
}

export default withStyles(styles)(App);