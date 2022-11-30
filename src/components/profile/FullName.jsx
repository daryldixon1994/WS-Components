import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
function FullName() {
  return (
    <div className='Full'>
      <ListGroup>
        <ListGroup.Item variant="danger">Wassim</ListGroup.Item>
        <ListGroup.Item variant="warning">Bjaoui</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default FullName