# Feature list


Features are split up into the three stages of the Ticket Lifecycle: **Issuance**, **Sale & Resale** and **Validation**. 
Issuance and Validation will be on the admin side (event organizer) while the Sale & Resale will be on the user side.

|         |                         Issuance                          |                                Sale & Resale                                 | Validation                                 |
| ------- | :-------------------------------------------------------: | :--------------------------------------------------------------------------: | ------------------------------------------ |
| UI      |  Admin UI with capability to issue, sell & track tickets  |         User UI: Platform that allows users to buy and sell tickets          | UI that displays ticket + QR Code; UI with QR Code Reader |
| Backend | unique tickets as non fungible token | logic of secondary sale can be programmed into the tickets (smart contracts) | verification of the ticket (Backend)       |
| Other   |                                                           |    OAuth for User (Google & Facebook)                                                                          | (dynamically created) QR Codes             |

### Version V0.1 
- **buying a Ticket**
- **Ticket wallet** 
- **Ticket validation (QR scan)**

**Issuance**: (no UI)

- Functionality for Event creation (ERC721 equivalent on Tendermint chain)
- Scenario that creates several TicketSales

**Sale & Resale**

- UI that allows to select / "buy" a ticket from the the TicketMarketplace 
- Ticket Wallet that shows the tickets a user has
- Ability to select a ticket in the Ticket Wallet and display further info of the ticket
- QR Code integration (unique QR code for each ticket)

**Validation**

- simple UI with possibility to validate QR Code via scan


### Version V0.2 
- **all features from V0.1**
- **create Ticketsales/events**
- **dynamic QR code generation** 

**Issuance**:

- UI with ability to generate a TicketSale by specifying the number of tickets, prices per ticket (all tickets with the same price) & date of the event

**Sale & Resale**



**Validation**

- dynamic QR code generator
