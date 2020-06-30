# Technical Spec

Event - Ticket (1-N relation)

#### Ticket Struct:

we can design the tickets in [erc721](http://erc721.org/) style.

```
type TicketData struct {
	InitialPrice  sdk.Coins `json:"ticket_price"`   // Price of this ticket
	MarkUpAllowed int       `json:mark_up_allowed"` // if ticket can be sold, what is max amount over originalPrice user can set per sale
	TotalTickets  int       `json:"total_tickets"`  // Total amount of tickets
	TicketsSold   int       `json:"tickets_sold`    // amount of tickets sold
	Resale        bool      `json:"resale"`         // Mark if secondary market is possible
}

type EventDetails struct {
	LocationName string `json:"location_name"`
	Address      string `json:"address`  // Address of event
	City         string `json:"city"`    // City in which the event is
	Country      string `json:"country"` // Country the event is being held in
	// EventDate    time
}

type Event struct {
	// unique identifier
	EventName         string         `json:"event_name"`          // Name of the Event
	EventOwner        string         `json:"event_owner"`         // Event Organizer
	EventOwnerAddress sdk.AccAddress `json:"event_owner_address"` // Event Organizer Address
	TicketData        TicketData     `json:"ticket_data"`         // From which data to generate tickets
	EventDetail       EventDetails   `json:"event_details"`       // struct contianing the event details
}
```

## ERC 721 Functionality

**BALANCE & OWNER GETTERS**

- function that returns all the Tokens that are assigned to an owner

`function balanceOf(address _owner) external view returns (uint256);`

- function that returns the owner of a token

`function ownerOf(uint256 _tokenId) external view returns (address);`

**TRANSFER**

- function that transfers the ownership of an token from one address to another address
  (Note: ERC721 allows to sent additional data (with no specified format) to \_to)

`function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;`

- same as above but without additional data

`function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;`

- also transfers token, but if \_to address is not specified, the token is lost

`function transferFrom(address _from, address _to, uint256 _tokenId) external payable;`

**APPROVAL**

- function that sets or reaffirms the approved address for a token

`function approve(address _approved, uint256 _tokenId) external payable;`

- function that enables or disables approval for a third party ("operator") to manage all of `msg.sender`'s assets.

`function setApprovalForAll(address _operator, bool _approved) external;`

**APPROVAL GETTERS**

- function that returns the approved address for a single token

`function getApproved(uint256 _tokenId) external view returns (address);`

- function queries if an address is an authorized operator for another address

`function isApprovedForAll(address _owner, address _operator) external view returns (bool);`

based on the above functions, the Token needs a address and a unique identifier:

```
struct ERC721Token{
owner address
tokenID uint (unique identifier of the token)
}
```

# Front End Tools

- CSS in JS (styled-components)
- Next.js for SSR
- Typescript
- no class based components --> hooks for state
