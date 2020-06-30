import { TopButton, TopButtonDisabled, TopButtonComingSoon } from './eventcreation-styles';

function topSelectionButtons(props) {

  const { meetupSelected, concertSelected, conferenceSelected, setMeetupSelected, setConcertSelected, setConferenceSelected } = props;

  const handleClick = (eventType) => {
    setMeetupSelected(false);
    setConcertSelected(false);
    setConferenceSelected(false)
    if (eventType == 1) {
      setMeetupSelected(true)
    };
    if (eventType == 2) {
      setConcertSelected(true)
    };
    if (eventType == 3) {
      setConferenceSelected(true)
    };
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

      {meetupSelected ? <TopButton >
        Meetup
                 </TopButton> : <TopButtonDisabled variant="outlined" color="primary" onClick={() => handleClick(1)} >
          Meetup
                </TopButtonDisabled>}

      {
        // concertSelected ? 
        <TopButtonComingSoon variant="outlined" color="primary">
          Concert
                </TopButtonComingSoon>
        //       : <TopButtonDisabled variant="outlined" color="primary" onClick={() => handleClick(2)} >
        // Concert
        //   </TopButtonDisabled>
      }

      {
        // conferenceSelected ? 
        <TopButtonComingSoon variant="outlined" color="primary">
          Conference
                </TopButtonComingSoon >
        //     : <TopButtonDisabled variant="outlined" color="primary" onClick={() => handleClick(3)} >
        //         Conference
        // </TopButtonDisabled>
      }

    </div>
  )

};

export default topSelectionButtons;