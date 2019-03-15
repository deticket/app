// import React from 'react';
// import Link from 'next/link';
// import styled from 'styled-components';
// import { tickets } from '../components/Data.js';
// import SideNav from '../components/SideNav.jsx';
// import { FixedSizeList as List } from 'react-window';
// import { createGlobalStyle } from "styled-components";
// import TextField from '@material-ui/core/TextField';

// const GlobalStyles = createGlobalStyle`
//     body {
//         @import url('https://fonts.googleapis.com/css?family=Roboto');
//         font-family: 'Roboto', sans-serif;
//     }
// `;

// const StyledCell = styled.div`
//     font-size: 2em;
//     text-align: center;
//     color: white;
//     width: 100vw;
//     height: 4em;
//     background: transparent
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     border: 10px solid white;
// `;


// const GridContainer = styled.div`
//     margin: auto;
// `;

// const StyledTextField = styled(TextField)`
//     && {
//     color: white;
//     border-color: white;
//     width: 40%;
//     background-color: transparent;
//     }
// `;

// const Background = styled.div`
//     font-size: 1.5em;
//     text-align: center;
//     color: white;
//     width: 100vw;
//     height 100vh;
//     background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
// `;

// const Heading1 = styled.h1`
//     height: 5em;
//     font-size: 5em;
// `;

// function createData(i) {
//     let id = i;
//     let ticketName = tickets[i].eventName;
//     console.log(tickets[i]);
//     console.log(tickets[i].eventName);
//     let date = tickets[i].date;
//     let ticketPrice = tickets[i].price;

//     return { id, ticketName, date, ticketPrice };
// }

// const TopCell = ({ index, style }) => (
//     <div style={style}>
//         <div style={{display: "flex"}}>
//                 <Link href={{ pathname: 'displayticket', query: { id: index}}}>
//                     <StyledCell>
// <div style={{display: "flex",
// justifyContent: "space-between", marginLeft: "5%", marginRight: "5%"}}>
//                                 <div>{tickets[index].eventName}</div>
//                                 <div>{tickets[index].price.toFixed(2)} €</div>
//                             </div>
//             <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "5%"}}>
//                                 {tickets[index].date}
//                             </div>
//                     </StyledCell>
//                 </Link>
//         </div>
//     </div>
// );

// //TODO: change fonts, put table logic in another component,
// function marketplace(){

//     const rows = [
//     ];

//     for(var i=0; i<tickets.length; i++){
//         rows[i] = createData(i);
//     }

//     return (
//         <Background>
//             <GlobalStyles/>
//             <SideNav/>
//                 <Heading1>Ticket Marketplace</Heading1>

//                 <StyledTextField
//                   id="outlined-search"
//                   label="Search field"
//                   type="search"
//                   //className={classes.textField}
//                   margin="normal"
//                   variant="outlined"
//                 />

//                 <GridContainer>
//                     <List
//                         itemCount={tickets.length}
//                         itemSize={250}
//                         height={tickets.length*250}
//                         width={800}
//                         style={{ margin: " 0 auto 0 auto" }}
//                     >
//                         {TopCell}
//                     </List>
//                 </GridContainer>
//         </Background>
//     );
// }

// export default marketplace;
