const monthMap = {
  '1': 'Jan',
  '2': 'Feb',
  '3': 'Mar',
  '4': 'Apr',
  '5': 'May',
  '6': 'Jun',
  '7': 'Jul',
  '8': 'Aug',
  '9': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

export const dateConfig = {
  'year': {
    format: 'YYYY',
    caption: 'Year',
    step: 1,
  },
  'month': {
    format: value => monthMap[value.getMonth() + 1],
    caption: 'Mon',
    step: 1,
  },
  'date': {
    format: 'DD',
    caption: 'Day',
    step: 1,
  },
};

export const timeConfig = {
  'hour': {
    format: 'hh',
    caption: 'Hour',
    step: 1,
  },
  'minute': {
    format: 'mm',
    caption: 'Min',
    step: 1,
  },
}

