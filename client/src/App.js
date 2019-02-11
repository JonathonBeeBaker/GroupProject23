import React, { Component } from "react";
import "./App.css";
import KidsProductList from "./components/KidsProductList";
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>GIFTBOT</h1>         
          </div>
            <br />
            <br />
            <br />
            <Button className="btnDark" color="dark">KIDS</Button>{' '}
            <Button className="btnDark" color="dark">TEENS</Button>{' '}
            <Button className="btnDark" color="dark">ELDERLY</Button>{' '}
            <br />
            <br />
            <br />
        <KidsProductList category="kids" /> 
      </div>
      

      
    );
  }
}

export default App;
