const ticket1 = {
  eventName: 'Concert Fantasy Band',
  date: '12/03/2019',
  location: 'Fantasy Arena, Berlin',
  block: 'A4',
  row: '12',
  seat: '17',
  price: 49.50,
};

const ticket2 = {
  eventName: 'Hertha BSC - League',
  date: '15/03/2019',
  location: 'Olympia Stadion, Berlin',
  block: 'B4',
  row: '7',
  seat: '9',
  price: 12.50,
};

const ticket3 = {
  eventName: 'Cosmos Meetup',
  date: '19/03/2019',
  location: 'Mindspace, Berlin',
  price: 0,
};

const event1 = {
  eventName: 'Concert Fantasy Band',
  date: '12/03/2019',
  location: 'Fantasy Arena, Berlin',
  totalTickets: '10000',
  ticketsSold: '7228',
  eventOwner: 'Concert Organizer',
  eventOwnerAddress: '0x1',
  resale: false,
  // TicketData
};

const event2 = {
  eventName: 'Hertha BSC - League',
  date: '15/03/2019',
  location: 'Olympia Stadion, Berlin',
  totalTickets: '74000',
  ticketsSold: '72521',
  eventOwner: 'Hertha',
  eventOwnerAddress: '0x2',
  resale: false,
  // TicketData
};

const event3 = {
  eventName: 'Cosmos Meetup',
  date: '19/03/2019',
  location: 'Mindspace, Berlin',
  totalTickets: '100',
  ticketsSold: '40',
  eventOwner: 'Cosmos',
  eventOwnerAddress: '0x3',
  resale: false,
  // TicketData
};

const tickets = [ticket1, ticket2, ticket3];
const events = [event1, event2, event3];

export { tickets, events };
