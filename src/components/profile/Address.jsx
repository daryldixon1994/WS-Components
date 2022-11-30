import React from 'react'
import Button from "react-bootstrap/Button";

function Address() {
  return (
    <div className='contact'>
      <h1>Contact Me From Here</h1>
      <Button
        variant="outline-primary"
        href="https://www.facebook.com/wassim.bjaoui.5"
      >
        My Address
      </Button>{" "}
    </div>
  );
}

export default Address