# Feature list


Features are split up into the three stages of the Ticket Lifecycle: **Issuance**, **Sale & Resale** and **Validation**. 
Issuance and Validation will be on the admin side (event organizer) while the Sale & Resale will be on the user side.

|         |                         Issuance                          |                                Sale & Resale                                 | Validation                                 |
| ------- | :-------------------------------------------------------: | :--------------------------------------------------------------------------: | ------------------------------------------ |
| UI      |  Admin UI with capability to issue, sell & track tickets  |         User UI: Platform that allows users to buy and sell tickets          | UI that displays ticket (wallet) + QR Code |
| Backend | unique tickets e.g. via ERC721 or each event as sidechain | logic of secondary sale can be programmed into the tickets (smart contracts) | verification of the ticket (Backend)       |
| Other   |                                                           |                                                                              | (dynamically created) QR Codes             |

### Version V0.1 
- **buying a Ticket**
- **Ticket wallet** 
- **Ticket validation (QR scan)**

**Issuance**: (no UI)

- Functionality for Event creation (ERC721 equivalent on Tendermint chain)
- Scenario that creates several TicketSales

**Sale & Resale**

- UI that allows to select / "buy" a ticket from the TicketSales 
- Ticket Wallet that shows the tickets of the user
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
