import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";


function Error404() {
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

}

export default Error404;
