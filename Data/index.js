const ticket1 = {
  eventName: 'Concert Fantasy Band',
  date: '12/03/2019, 8:30 pm',
  location: 'Fantasy Arena, Berlin',
  block: 'A4',
  row: '12',
  seat: '17',
  price: 49.50,
};

const ticket2 = {
  eventName: 'Cosmos Meetup',
  date: '19/03/2019,, 6:00 pm',
  location: 'Mindspace, Berlin',
  price: 0,
};

const event1 = {
  eventName: 'Concert Fantasy Band',
  date: '12/03/2019',
  eventOwner: 'Concert Organizer',
  eventOwnerAddress: '0x1',
  eventDetails: {
    location: 'Fantasy Arena, Berlin',
    address: 'ABC Straße 123',
    city: 'Berlin',
    country: 'Germany',
  },
  ticketData: {
    resale: false,
    totalTickets: '10000',
    ticketsSold: '7228',
    initialPrice: 49.50,
    markupAllowed: 0,
  },
  // TicketData resale totaltickets ticketsold initialprice markupallowed
  // EventDetails address city country date
};

const event2 = {
  eventName: 'Hertha BSC - League',
  date: '15/03/2019',
  eventOwner: 'Hertha BSC Berlin',
  eventOwnerAddress: '0x2',
  eventDetails: {
    location: 'Olympia Stadion, Berlin',
    address: 'XYZ Straße 123',
    city: 'Berlin',
    country: 'Germany',
  },
  ticketData: {
    resale: false,
    totalTickets: '74000',
    ticketsSold: '72521',
    initialPrice: 49.50,
    markupAllowed: 0,
  },
};

const event3 = {
  eventName: 'Cosmos Meetup',
  date: '19/03/2019',
  eventOwner: 'Cosmos',
  eventOwnerAddress: '0x3',
  eventDetails: {
    location: 'Mindspace, Berlin',
    address: 'XYZ Straße 456',
    city: 'Berlin',
    country: 'Germany',
  },
  ticketData: {
    resale: false,
    totalTickets: '100',
    ticketsSold: '40',
    initialPrice: 0,
    markupAllowed: 0,
  },
};

const tickets = [ticket1, ticket2];
const tickets2 = [];
const events = [event1, event2, event3];

export { tickets, tickets2, events };
