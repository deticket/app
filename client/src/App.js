import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom"
//import logo from './logo.svg';
//import './App.css';
// import Login from "./components/Login.jsx"
// import TicketWallet from "./components/TicketWallet.jsx"
// import DisplayTicket from "./components/DisplayTicket.jsx"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            {/* <Route exact path="/" component={Login}/>
            <Route path="/wallet" component={TicketWallet}/>      
            <Route path="/ticket" component={DisplayTicket}/>         */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
