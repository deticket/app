import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import QrReader from 'react-qr-reader';

// it is this library: https://github.com/JodusNodus/react-qr-reader
// the error has to do with webrtc-adapter module

// if(!config.isServer) { var QrReader = require('react-qr-reader'); }
class Reader extends Component {
  // state = {
  //   result: 'No result'
  // }

  handleScan(data) {
    const test = data;

    return test;
    // if (data) {
    //   this.setState({
    //     result: data,
    //   });
  }

  handleError(err) {
    console.error(err);
  }

  openScanner() {
    return (
      <QrReader
        delay={300}
        onError={this.handleError}
        onScan={this.handleScan}
        style={{ width: '100%' }}
      />
    );
  }

  render() {
    return (
      <div>

        <Button onClick={this.openScanner}>
        Click to Scan
        </Button>
        {/* <p>{this.state.result}</p> */}
      </div>
    );
  }
}

export default Reader;
