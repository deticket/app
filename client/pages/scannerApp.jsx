import React, { useState } from "react";
import { Button } from "@material-ui/core";

import dynamic from "next/dynamic";

const QrReader = dynamic({
  loader: () => import("react-qr-reader")
});

// it is this library: https://github.com/JodusNodus/react-qr-reader
// the error has to do with webrtc-adapter module

// if(!config.isServer) { var QrReader = require('react-qr-reader'); }
const Reader = () => {
  const [scanner, setScannerOpen] = useState(false);
  const handleScan = data => data;
  // if (data) {
  //   this.setState({
  //     result: data,
  //   });

  const handleError = err => {
    console.error(err);
  };

  const openScanner = () => (
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: "100%" }}
    />
  );

  return (
    <div>
      <Button onClick={() => setScannerOpen(!scanner)}>Click to Scan</Button>
      {console.log(scanner)}
      {scanner == true && openScanner}
    </div>
  );
};

export default Reader;
