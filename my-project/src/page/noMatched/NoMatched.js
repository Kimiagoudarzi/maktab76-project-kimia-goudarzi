import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";

function NoMatched() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>متاسفم</Alert.Heading>
        <p>
          صفحه یافت نشد :)
        </p>
      </Alert>
    );
  }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default NoMatched;
