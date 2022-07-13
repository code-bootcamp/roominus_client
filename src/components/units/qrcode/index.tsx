import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

export default function QRCodeComponent(props) {
  const download = function () {
    if (typeof document !== "undefined") {
      const link = document.createElement("a");
      link.download = "filename.png";
      link.click();
      link.href = document.getElementById("canvas").toDataURL();
    }
  };

  return (
    <Fragment>
      <QRCode value={props.url} id="canvas" />
      <br />
      <button type="button" onClick={download}>
        Download QR
      </button>
    </Fragment>
  );
}

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<QRCodeComponent />, rootElement);
}
